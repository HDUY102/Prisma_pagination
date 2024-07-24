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

const PaginationPage = () => {
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(()=>{
        const fetchPagination = async () =>{
            try {
                const response = await fetch("/api/phantrang", {
                    method: "GET"
                });
                if(response.ok){
                    const data = await response.json();
                    setTotalPages(data.meta.totalPages);
                    setCurrentPage(data.meta.currentPage);
                    console.log("total ",totalPages)
                    console.log("currentPage ",currentPage)
                }
            } catch (error) {
                console.error("Failed to fetch pagination data", error);
            }
        }
        fetchPagination();
    },[totalPages,currentPage])
    const handleChangePage = (page:number) => {
        if (page >0 && page<currentPage){
            setCurrentPage(page)
        }
    }
  return (
    <div>
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={()=>{
                        handleChangePage(currentPage-1)
                    }} disabled={currentPage === 1}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" onClick={()=>{
                        handleChangePage(currentPage+1)
                    }} disabled={currentPage === totalPages}/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    </div>
  )
}

export default PaginationPage