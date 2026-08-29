import { NextResponse } from "next/server";
import {
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE_SECONDS,
  createSessionToken,
  verifyPassword,
} from "@/lib/broker-registration/auth";

export async function POST(request: Request) {
  let password: unknown;
  try {
    const body = await request.json();
    password = body.password;
  } catch {
    return NextResponse.json(
      { error: "Something went wrong reading that — please try again." },
      { status: 400 },
    );
  }

  if (typeof password !== "string" || !password) {
    return NextResponse.json(
      { error: "Enter the password to continue." },
      { status: 400 },
    );
  }

  if (!process.env.BROKER_REGISTRATION_PASSWORD) {
    return NextResponse.json(
      {
        error:
          "This module isn't set up yet — ask your admin to set BROKER_REGISTRATION_PASSWORD.",
      },
      { status: 503 },
    );
  }

  if (!verifyPassword(password)) {
    return NextResponse.json(
      { error: "That password isn't right — check with your team lead and try again." },
      { status: 401 },
    );
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return response;
}
