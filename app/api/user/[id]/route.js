import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req, res) {
   const { id } = await res.params;

   try {
      const user = await prisma.user.findUnique({
         where: {
            id: Number(id),
         },
      });

      return NextResponse.json(users, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function DELETE(req, res) {
   try {
      const { id } = req.params;

      // Check if the user exists
      const existingUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });
      if (!existingUser) {
         return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      // Delete the user
      await prisma.user.delete({ where: { id: parseInt(id) } });

      return NextResponse.json({ message: "User deleted" }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
