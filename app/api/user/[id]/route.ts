import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
   const id = Number(new URL(req.url).searchParams.get("id"));

   if (isNaN(id) || id <= 0) return NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 });

   try {
      const user = await prisma.user.findUnique({ where: { id } });

      if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

      return NextResponse.json(user, { status: 200 });
   } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

export async function DELETE(req: NextRequest) {
   const id = Number(new URL(req.url).searchParams.get("id"));

   if (isNaN(id) || id <= 0) return NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 });

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
//    const id = Number(new URL(req.url).searchParams.get("id"));

//    if (isNaN(id) || id <= 0) return NextResponse.json({ error: "Invalid or missing ID" }, { status: 400 });

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
