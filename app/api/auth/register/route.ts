import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CreateUserSchema } from "@/lib/validation/user";
import bcrypt from "bcrypt";
import { ZodError } from "zod";

export async function POST(req: NextRequest): Promise<NextResponse> {
   try {
      const reqData = await req.json();
      const userData = CreateUserSchema.parse(reqData);

      // Check if the user already exists
      const existingUser = await prisma.user.findFirst({
         where: { OR: [{ email: userData.email }, { cpf: userData.cpf }] },
      });
      if (existingUser) return NextResponse.json({ error: "User already exists" }, { status: 400 });

      // Hash the password
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      // Create the user
      const user = await prisma.user.create({
         data: {
            email: userData.email,
            password: hashedPassword,
            name: userData.name || null,
            cpf: userData.cpf || null,
            phone: userData.phone || null,
         },
      });

      return NextResponse.json(
         { message: "User registered", user: { id: user.id, email: user.email, name: user.name } },
         { status: 201 }
      );
   } catch (error: unknown) {
      if (error instanceof ZodError) return NextResponse.json({ errors: error.errors }, { status: 400 });
      if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
   }
}
