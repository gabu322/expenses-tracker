import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getIdFromRequest } from "@/utils/functions/api/getIdFromRequest";

export async function GET(req: NextRequest) {
   const { id, error } = getIdFromRequest(req);
   if (error) return error;

   try {
      const user = await prisma.user.findUnique({ where: { id } });

      if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

      return NextResponse.json(user, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function DELETE(req: NextRequest) {
   const { id, error } = getIdFromRequest(req);
   if (error) return error;

   try {
      const user = await prisma.user.findUnique({ where: { id } });

      if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

      await prisma.user.delete({ where: { id } });

      return NextResponse.json({ message: "User deleted" }, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

// * Alternative way to export the functions
// export async function handler(req: NextRequest) {
//   const { id, error } = getIdFromRequest(req);
//   if (error) return error;

//    try {
//       const user = await prisma.user.findUnique({ where: { id } });

//       if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

//       switch (req.method) {
//          case "GET": // * GET

//             return NextResponse.json(user, { status: 200 });
//          case "DELETE": // * DELETE

//             await prisma.user.delete({ where: { id } });

//             return NextResponse.json({ message: "User deleted" }, { status: 200 });
//          default:
//             return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
//       }
//    } catch (error: any) {
//       return NextResponse.json({ error: error.message }, { status: 500 });
//    }
// }

// export { handler as GET, handler as DELETE };
