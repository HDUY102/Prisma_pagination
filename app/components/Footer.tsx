import React from 'react'
import style from "@/app/components/style/Footer.module.css";
import { FiChevronRight,FiPhone,FiMail,FiMapPin,FiFacebook,FiInstagram,FiTwitter,FiLinkedin } from "react-icons/fi";

const Footer = () => {
    const yearCurrent = new Date().getFullYear()
  return (
    <div className={style.footer}>
        <section className={style.container}>
            <div className={style.box}>
                <h3>Quick Links</h3>
                <a href="" className='flex items-center'><i><FiChevronRight/></i> Home</a>
                <a href="" className='flex items-center'><i><FiChevronRight/></i> Shop</a>
                <a href="" className='flex items-center'><i><FiChevronRight/></i> About</a>
                <a href="" className='flex items-center'><i><FiChevronRight/></i> Contact</a>
            </div>
            
            <div className={style.box}>
                <h3>Contact Info</h3>
                <p className='flex items-center'><i><FiPhone/></i> +84.432.333.123</p>
                <p className='flex items-center'><i><FiMail /></i> flowergarden@gmail.com</p>
                <p className='flex items-center'><i><FiMapPin /> </i>
                    Trụ sở chính 123 Ngô Quyền – Sơn Trà – Đà Nẵng
                    Giờ mở hàng: 7:00-22:00 hàng ngày
                </p>
            </div>

            <div className={style.box}>
                <h3>Follow Us</h3>
                <p className='flex items-center'><i><FiFacebook /></i> Facebook</p>
                <p className='flex items-center'><i><FiInstagram /></i> Instagram</p>
                <p className='flex items-center'><i><FiTwitter /></i> Twitter</p>
                <p className='flex items-center'><i><FiLinkedin /></i> Linkedin</p>
            </div>
        </section>
        <p className={style.credit}>Wish you as beautiful as flowers by <span> flower <span className={style.garden}>garden</span></span> | &copy;  {yearCurrent.toString()}</p>
    </div>
  )
}

export default Footer