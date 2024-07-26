"use client"
import React, { useEffect, useState } from "react";
import style from "@/app/style/Product.module.css";
import { FaHeart, FaShare } from "react-icons/fa";
import PaginationPage from "./pagination/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

const Product = () => {
    const [flowers, setFlowers] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()
    const currentPage = searchParams.get('currentPage')
    const limit = searchParams.get('limit')

    useEffect(() =>{
        const fetchFlowers = async () => {
            try {
                const response = await fetch(`/api/phantrang?currentPage=${currentPage}`, {
                    method: "GET"
                });
                if (response.ok) {
                    const data = await response.json();
                    setFlowers(data.data.flowers);
                } else {
                    console.error("Failed to fetch flowers");
                }
            } catch (error) {
                console.error("Error fetching flowers:", error);
            }
        }
        fetchFlowers()
    },[currentPage])

    const handlePageChange = (page:number) =>{
        router.push(`?currentPage=${page}`, {scroll:false})
        const productElement = document.getElementById("product")
        productElement?.scrollIntoView({behavior:"smooth"})
    }

    return (
        <section id="product" className={style.product}>
            <h2>Product</h2>
            <div className={style.container}>
                {flowers.map((flower:any)=>(
                    <div className={style.box}>
                    <p className={style.discount}>-20%</p>
                    <div className={style.image}>
                        <img src="/flower1.png" alt="" />
                        <div className={style.button}>
                        <a href="">
                            <FaHeart className={style.icon} />
                        </a>
                        <a className={style.addCart}>Add To Cart</a>
                        <a href="">
                            <FaShare className={style.icon} />
                        </a>
                        </div>
                    </div>
                    <div className={style.content}>
                        <h3>Hoa {flower.name}</h3>
                        {flower.price<flower.oldPrice ? 
                            (
                                <div className={style.price}>
                                    ${flower.price} <span>${flower.oldPrice}</span>
                                </div>
                            ) : (
                                <div className={style.price}>
                                    ${flower.price}
                                </div>
                            )
                        }
                    </div>
                </div>
                ))}
            </div>
            <PaginationPage onPageChange={handlePageChange}/>
        </section>
    );
};

export default Product;