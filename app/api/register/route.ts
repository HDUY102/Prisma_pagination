import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import RegisterSchema from "./RegisterSchema";
import { hash } from "bcrypt";

export async function POST(req: NextRequest){
    try{
        const body =await req.json()
        const {email,username,password} = body
        const existUser = await prisma.users.findFirst({
            where:{email: email}
        })
        if(existUser){
            return NextResponse.json({messaeg:"User already exists"},{status: 490})
        }
        const validation = RegisterSchema.safeParse(body)
        if(!validation.success){
            return NextResponse.json(validation.error.errors, {status: 400})
        }else{
            const hashedPassword = await hash(password,12)
            const newUser = await prisma.users.create({
                data:{
                    email,username,
                    password: hashedPassword,
                    role: 0
                }
            })
            return NextResponse.json({newUser,message:"Success"},{status: 201})
        }
    }catch{
        return NextResponse.json({message:"Error"},{status: 500})
    }
}