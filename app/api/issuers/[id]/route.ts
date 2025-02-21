import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function handler(req: NextRequest) {
   const searchParams = new URL(req.url).searchParams;

   const id = Number(searchParams.get("id"));
   if (isNaN(id) || id <= 0) return NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 });

   try {
      const issuer = await prisma.issuer.findUnique({ where: { id } });

      switch (req.method) {
         // * GET
         case "GET":
            return NextResponse.json(issuer, { status: 200 });

         // * PUT
         case "PUT":
            const requestData = await req.json();

            const updatedIssuer = await prisma.issuer.update({
               where: {
                  id: Number(id),
               },
               data: {
                  name: requestData.name,
                  color: requestData.color,
                  icon: requestData.icon,
               },
            });

            return NextResponse.json(updatedIssuer, { status: 200 });

         // * DELETE
         case "DELETE":
            await prisma.issuer.delete({
               where: {
                  id: Number(id),
               },
            });

            return NextResponse.json({ message: "Issuer deleted" }, { status: 200 });
         default:
            return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
      }
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
