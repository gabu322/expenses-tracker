import { prisma } from "@/prisma/client";

export async function GET(req, res) {
   const { id } = await res.params;

   try {
      const card = await prisma.issuer.findUnique({
         where: {
            id: Number(id),
         },
      });

      return new Response(JSON.stringify(card), { status: 200 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
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

      return new Response(JSON.stringify(updatedIssuer), { status: 200 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
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

      return new Response(null, { status: 204 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
}
