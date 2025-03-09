import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getParams, ParamsType } from "@/lib/functions/params";

async function handler(req: NextRequest, context: ParamsType) {
   const { id } = await getParams(context);

   try {
      const user = await prisma.user.findUnique({ where: { id } });

      if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

      switch (req.method) {
         case "GET":
            return NextResponse.json(user, { status: 200 });

         case "DELETE":
            await prisma.user.delete({ where: { id } });

            return NextResponse.json({ message: "User deleted" }, { status: 200 });

         default:
            return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
      }
   } catch (error: unknown) {
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}

export { handler as GET, handler as DELETE };
