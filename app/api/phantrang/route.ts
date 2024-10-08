import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){

    const searchParams = req.nextUrl.searchParams
    // const limit:number = Number(searchParams.get('limit')) || 12
    const limit = 12
    const currentPage:number = Number(searchParams.get('currentPage')) || 1
    const sortOrder:any = searchParams.get('sortOrder') || 'asc'
    const keyWord:string = searchParams.get('keyWord') || ''
    const totalRecordFlowers = await prisma.flowers.count()
    const totalPages = Math.ceil(totalRecordFlowers / limit)

    const flowers = await prisma.flowers.findMany({   
        take: limit,
        skip: currentPage,
        where: {
            name: {contains: keyWord}
        },
        orderBy: {
            price: sortOrder
        },
    })
    return NextResponse.json({data: {flowers},meta: {totalRecordFlowers,totalPages,limit, currentPage}})
}