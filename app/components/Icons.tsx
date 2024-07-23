import React from 'react'
import { GrCreditCard,GrCurrency,GrGift,GrDeliver  } from "react-icons/gr";
import style from "@/app/style/About.module.css";

const Icons = () => {
  return (
    <div className={style.container}>
        <div className={style.cardicon}>
            <GrDeliver className={style.icon}/>
            <div className={style.content}>
                <h3>Free Delivery</h3>
                <span>On All Orders</span>
            </div>
        </div>
        <div className={style.cardicon}>
            <GrCurrency className={style.icon}/>
            <div className={style.content}>
                <h3>10 Days Returns</h3>
                <span>Moneyback Guarantee</span>
            </div>
        </div>
        <div className={style.cardicon}>
            <GrGift className={style.icon}/>
            <div className={style.content}>
                <h3>Offer & Gifts</h3>
                <span>On All Orders</span>
            </div>
        </div>
        <div className={style.cardicon}>
            <GrCreditCard className={style.icon}/>
            <div className={style.content}>
                <h3>Secure Payments</h3>
                <span>Protected By Paypal</span>
            </div>
        </div>
    </div>
  )
}

export default Icons