import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
   const searchParams = new URL(req.url).searchParams;
   const data = {
      method: "GET",
      query: Object.fromEntries(searchParams),
      searchParams: searchParams.toString(),
   };
   return NextResponse.json(data, { status: 200 });
}

export async function POST(req: NextRequest) {
   const data = await req.json();
   console.log(data);
   return NextResponse.json(data, { status: 200 });
}
