import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as z from "zod";

const prisma = new PrismaClient();

const userObj = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(3),
});
//zod objeto , para verificação de dados sem fazer nada

export async function POST(req: NextRequest) {
  let parsedBody;

  try {
    parsedBody = userObj.safeParse(await req.json());
    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid request data", details: parsedBody.error },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON format", details: error },
      { status: 400 }
    );
  }

  const { email, password, name } = parsedBody.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { Email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: error },
      { status: 500 }
    );
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        Email: email,
        Password: password,
        Name: name,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: error },
      { status: 500 }
    );
  }
}
