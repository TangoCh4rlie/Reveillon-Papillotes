import { UserCreateInput } from "@/types/user";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const body = await req.json();

    if (!body) {
        return NextResponse.json({
            status: 400,
            body: { error: "No body provided" }
        });
    }
    
    const { name, email, password } = body as unknown as UserCreateInput;
    console.log(name, email, password);
    
    if (!name || !email || !password) {
        return NextResponse.json({
            status: 400,
            body: { error: "Missing required fields" }
        });
    }
    try {
        console.log("Creating user");
        
        const user = await prisma.user.create({
            data: {
                username: name,
                email: email,
                password: password
            }
        });
        return NextResponse.json({ 
            status: 200,
            body: {message: "User created"},
            user: user
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                return NextResponse.json({
                    status: 400,
                    body: { error: "User already exists" }
                });
            }
        }
    }
}