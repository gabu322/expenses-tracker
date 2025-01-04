import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function GET(req, res) {
   try {
      const issuers = await prisma.issuer.findMany();

      return NextResponse.json(issuers, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function POST(req, res) {
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
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
