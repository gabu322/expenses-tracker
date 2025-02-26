import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { updateIssuerSchema } from "@/lib/validation/issuerValidation";
import { getParams, ParamsType } from "@/utils/params";
import { ZodError } from "zod";

async function handler(req: NextRequest, context: ParamsType) {
   const { id } = await getParams(context);

   try {
      const issuer = await prisma.issuer.findUnique({ where: { id } });
      if (!issuer) return NextResponse.json({ error: "Issuer not found" }, { status: 404 });

      switch (req.method) {
         case "GET":
            return NextResponse.json(issuer, { status: 200 });

         case "PUT":
            const requestData = await req.json();
            const updatedIssuerData = updateIssuerSchema.parse(requestData);

            const updatedIssuer = await prisma.issuer.update({
               where: { id },
               data: {
                  name: updatedIssuerData.name,
                  color: updatedIssuerData.color,
                  icon: updatedIssuerData.icon,
               },
            });

            return NextResponse.json(updatedIssuer, { status: 200 });

         case "DELETE":
            await prisma.issuer.delete({
               where: { id },
            });

            return NextResponse.json({ message: "Issuer deleted" }, { status: 200 });
         default:
            return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
      }
   } catch (error: unknown) {
      if (error instanceof ZodError) return NextResponse.json({ errors: error.errors }, { status: 400 });
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}

export { handler as GET, handler as PUT, handler as DELETE };
