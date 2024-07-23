import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(){
    const flowers = await prisma.flowers.findMany({
        take: 10,
        skip: 1
    })

    //tìm flowers có sắp xếp prices giảm dần
    // const flowers = await prisma.flowers.findMany({
    //     take: 10,
    //     skip: 1,
    //     orderBy:{price:"asc"}
    // })
    return NextResponse.json({flowers: flowers },{ status: 200})
}
