import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/broker-registration/auth";

const PUBLIC_PATHS = new Set([
  "/broker-registration/login",
  "/api/broker-registration/auth",
]);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const authenticated = await verifySessionToken(token);

  if (authenticated) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/broker-registration")) {
    return NextResponse.json(
      { error: "Not signed in to the broker registration module." },
      { status: 401 },
    );
  }

  const loginUrl = new URL("/broker-registration/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/broker-registration/:path*", "/api/broker-registration/:path*"],
};
