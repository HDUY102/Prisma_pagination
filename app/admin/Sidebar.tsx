'use client'
import React, { useState } from "react";
import style from "./Admin.module.css";
import { FaBars , FaHome, FaTimes, FaTools,FaGift,FaChartBar, FaSignOutAlt    } from "react-icons/fa";
import clsx from 'clsx';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleActive = (item:any) =>{
    setIsActive(item)
  }

  return (
    <div className={style.menu}>
        <div className={style.logoContainer}>
            <a href="/admin">
                {isOpen ? (
                    <h1 className={style.logoText}>Flower <span> Garden</span></h1>
                ):(
                    <img src="/logo.png" alt="Logo" className={style.logoImage} />
                )}
            </a>
            {isOpen ? (
                <FaTimes onClick={handleOpen} className={style.icon} />
            ):(
                <FaBars onClick={handleOpen} className={style.icon} />
            )}
        </div>
        {isOpen ? (
            <div className={style.menuItems}>
                <a href="#" onClick={() => handleActive('home')}
                    className={clsx({ [style.active]: isActive === 'home' })}><FaHome className='mr-2'/> Trang chủ</a>
                <a href="#" onClick={() => handleActive('products')}
                    className={clsx({ [style.active]: isActive === 'products' })}><FaGift className='mr-2'/> Sản phẩm</a>
                <a href="#" onClick={() => handleActive('statistics')}
                    className={clsx({ [style.active]: isActive === 'statistics' })}><FaChartBar className='mr-2'/> Thống kê</a>
                <a href="#" onClick={() => handleActive('settings')}
                    className={clsx({ [style.active]: isActive === 'settings' })}><FaTools className='mr-2'/> Cài đặt</a>
                <a href="/login" ><FaSignOutAlt className='mr-2'/> Đăng xuất</a>
            </div>
        ):(
            <div className={style.menuItemsClosed}>
                <a href="/admin" ><FaHome/></a>
                <a href="/admin" ><FaGift/></a>
                <a href="/admin" ><FaChartBar/></a>
                <a href="/admin" ><FaTools/></a>
                <a href="/login" ><FaSignOutAlt/></a>
          </div>
        )}
        {/* {isOpen ?} */}
    </div>
  );
};

export default Sidebar;
