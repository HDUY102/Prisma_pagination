"use client"
import React, { useEffect, useState } from "react";
import style from "@/app/style/Product.module.css";
import { FaHeart, FaShare } from "react-icons/fa";
import PaginationPage from "./pagination/Pagination";

const Product = () => {
    const [flowers, setFlowers] = useState([])
    useEffect(() =>{
        const fetchFlowers = async () => {
            try {
                const response = await fetch("/api/phantrang", {
                    method: "GET"
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log("data.meta: ",data.meta.flowers)
                    setFlowers(data.data.flowers);
                } else {
                    console.error("Failed to fetch flowers");
                }
            } catch (error) {
                console.error("Error fetching flowers:", error);
            }
        }
        fetchFlowers()
    },[])
    console.log("flowers: ",flowers)
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
            <PaginationPage />
        </section>
    );
};

export default Product;