import { NextRequest, NextResponse } from "next/server";

interface IdResponse {
   id?: number;
   error?: any;
}

/**
 * Get the ID from the request URL
 * @param {NextRequest} req The request object
 * @returns {id?: number; error?: any} The ID or an error response
 */
export function getIdFromRequest(req: NextRequest): IdResponse {
   const searchParams = new URL(req.url).searchParams;
   const id = Number(searchParams.get("id"));

   if (isNaN(id) || id <= 0) return { error: NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 }) };

   return { id };
}
