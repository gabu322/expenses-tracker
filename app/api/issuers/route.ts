import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

async function handler(req: NextRequest) {
   try {
      switch (req.method) {
         case "GET":
            const issuers = await prisma.issuer.findMany();

            return NextResponse.json(issuers, { status: 200 });

         case "POST":
            const requestData = await req.json();

            const newIssuer = await prisma.issuer.create({
               data: {
                  name: requestData.name,
                  color: requestData.color,
                  icon: requestData.icon || null,
               },
            });

            return NextResponse.json(newIssuer, { status: 201 });
         default:
            return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
      }
   } catch (error: unknown) {
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}

export { handler as GET, handler as POST };
