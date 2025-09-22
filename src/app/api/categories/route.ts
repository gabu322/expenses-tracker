import { handleApiError } from "@/lib/functions/index";
import { prisma } from "@/lib/prisma";
import { CreateCategorySchema } from "@/lib/validation/category";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
   try {
      if (req.method === "GET") {
         const categories = await prisma.category.findMany({
            orderBy: { name: "asc" },
         });

         return NextResponse.json(categories, { status: 200 });
      } else if (req.method === "POST") {
         const data = await req.json();

         const categoriesData = CreateCategorySchema.parse(data);

         const newCategory = await prisma.category.create({
            data: {
               name: categoriesData.name,
               description: categoriesData.description || null,
               icon: categoriesData.icon || null,
               color: categoriesData.color || null,
            },
         });

         return NextResponse.json(newCategory, { status: 201 });
      } else return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
   } catch (error) {
      handleApiError(error);
   }
}

export { handler as GET, handler as POST };
