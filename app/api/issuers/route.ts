import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
   try {
      const issuers = await prisma.issuer.findMany();

      return NextResponse.json(issuers, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function POST(req: NextRequest) {
   try {
      const requestData = await req.json();

      const newIssuer = await prisma.issuer.create({
         data: {
            name: requestData.name,
            color: requestData.color,
            icon: requestData.icon || null,
         },
      });

      return NextResponse.json(newIssuer, { status: 201 });
   } catch (error:any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
