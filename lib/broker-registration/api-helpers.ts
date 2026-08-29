import { NextResponse } from "next/server";
import { DatabaseNotConfiguredError } from "@/db";

export function handleApiError(err: unknown) {
  if (err instanceof DatabaseNotConfiguredError) {
    return NextResponse.json(
      {
        error:
          "The broker database isn't connected yet — ask your admin to finish setup (see README).",
      },
      { status: 503 },
    );
  }
  console.error(err);
  return NextResponse.json(
    {
      error:
        "Something went wrong on our end — try again, and let your admin know if it keeps happening.",
    },
    { status: 500 },
  );
}
