import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import LoginSchema from "./LoginSchema";
import { compare } from "bcrypt";
import {sign} from "jsonwebtoken"

export async function POST(req: NextRequest){
    try{
        const body = await req.json()
        const {email,password} = body
        const validation = LoginSchema.safeParse(body)

        if(!validation){
            return NextResponse.json({message:"Invalid email or password"}, {status: 400})
        }else{
            const findUser = await prisma.users.findFirst({
                where:{email}
            })

            if(!findUser || !(await compare(password,findUser.password))){
                return NextResponse.json({message:"Login information is incorrect"}, {status: 400})
            }

            const role = findUser.role
            const username = findUser.username
            const token = sign({username,role}, "secret-key",{ expiresIn: "4h" })
            const response = NextResponse.json(
                {id: findUser.id,role,username,success: token},
                {status: 200, headers: { "content-type": "application/json" }}
            )

            return response
        }
    }catch{
        return NextResponse.json({message:"Error login!"},{status: 500})
    }
}