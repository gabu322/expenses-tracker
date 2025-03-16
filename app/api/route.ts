import { NextRequest, NextResponse } from "next/server";

export async function GET() {
   console.log("GET");
   return NextResponse.json({ message: "GET" }, { status: 200 });
}

export async function POST(req: NextRequest) {
   const data = await req.json();
   console.log(data);
   return NextResponse.json(data, { status: 200 });
}
