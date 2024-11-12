import { prisma } from "@/prisma/client";

export async function GET(req, res) {
   try {
      const issuers = await prisma.issuer.findMany();

      return new Response(JSON.stringify(issuers), { status: 200 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
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

      return new Response(JSON.stringify(newIssuer), { status: 201 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
}
