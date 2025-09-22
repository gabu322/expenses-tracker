import { NextResponse } from "next/server";
import { ZodError } from "zod";

export function handleApiError(error: unknown): Response {
   if (error instanceof ZodError) return NextResponse.json({ errors: error.errors }, { status: 400 });
   if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
   return NextResponse.json({ error: "Unknown error" }, { status: 500 });
}
