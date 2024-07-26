'use client'
import React, { useEffect, useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from 'next/navigation'

const PaginationPage = ({onPageChange}:any) => {
    const [totalPages, setTotalPages] = useState(0)
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('currentPage'))

    useEffect(()=>{
        const fetchPagination = async () =>{
            try {
                const response = await fetch(`/api/phantrang?currentPage=${currentPage}`, {
                    method: "GET"
                });
                if(response.ok){
                    const data = await response.json();
                    setTotalPages(data.meta.totalPages);
                }
            } catch (error) {
                console.error("Failed to fetch pagination data", error);
            }
        }
        fetchPagination();
    },[totalPages,currentPage])

    const handleChangePage = (page:number) => {
        if (page > 0 && page <= totalPages){
            onPageChange(page)
        }
    }

    return (
        <div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={()=>{
                            handleChangePage(currentPage-1)
                        }} disabled={currentPage === 1}/>
                    </PaginationItem>
                    {Array.from({length: totalPages},(_,index) =>(
                        <PaginationItem>
                            <PaginationLink 
                                isActive={ index+1 === currentPage}
                                onClick={()=> handleChangePage(index+1)}
                            >
                                {index+1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        {currentPage >= totalPages-2 ? '' : <PaginationEllipsis />}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={()=>{
                            handleChangePage(currentPage+1)
                        }} disabled={currentPage === totalPages}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

        </div>
    )
}

export default PaginationPage