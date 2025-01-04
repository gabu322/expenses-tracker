import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req, res) {
   const { id } = await res.params;

   try {
      const card = await prisma.issuer.findUnique({
         where: {
            id: Number(id),
         },
      });

      return NextResponse.json(card, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function PUT(req, res) {
   const { id } = await res.params;

   try {
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
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function DELETE(req, res) {
   const { id } = await res.params;

   try {
      await prisma.issuer.delete({
         where: {
            id: Number(id),
         },
      });

      return NextResponse.json({ message: "Issuer deleted" }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
