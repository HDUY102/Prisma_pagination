'use client'
import React, { useState } from "react";
import { FaCartShopping, FaHeart, FaCircleUser } from "react-icons/fa6";
import style from "@/app/style/Header.module.css";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <header className={style.header}>
        <div>
          <a href={"/"} className="font-bold text-2xl">
            <h1 className={style.logo}>
              Flower <span>Garden</span>
            </h1>
          </a>
        </div>
        <nav className={`${style.navbar} ${nav ? style.active : ''}`}>
          <a href="#home" onClick={handleNav}>Home</a>
          <a href="#about" onClick={handleNav}>About</a>
          <a href="#product" onClick={handleNav}>Product</a>
          <a href="#review" onClick={handleNav}>Review</a>
        </nav>
        <div className={style.icons}>
          <a href="#"><FaCartShopping/></a>
          <a href="#"><FaHeart/></a>
          <a href="#"><FaCircleUser/></a>
        </div>
        {/* mobile button */}
        <div onClick={handleNav} className={`${style.toggle}`}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </header>
    </div>
  );
};

export default Header;
