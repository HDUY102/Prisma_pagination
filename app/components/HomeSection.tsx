"use client";
import React, { useEffect, useState } from "react";
import style from "@/app/style/HomeSection.module.css";

const HomeSection = () => {
  return (
    // <Carousel activeIndex={index} onSelect={handleSelect}>
    //   {bootstrap.map((item) => (
    //     <Carousel.Item key={item.id} className={style.section} interval={4000}>
    //       <img src={item.imageUrl} alt="slides" />
    //       <Carousel.Caption className={style.content}>
    //         <h3>{item.title}</h3>
    //         <p>{item.body}</p>
    //         <button className="btn btn-danger">Visit Docs</button>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
    <section id="home" className={style.section}>
        <div className={style.content}>
            <h3>Fresh Flowers</h3>
            <span>natural & beautiful flowers</span>
            <p>Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Harum, excepturi
                blanditiis. Id, quae reiciendis debitis
                aliquid aut similique magnam ipsa. Eius
                saepe quidem distinctio, ea doloremque
                quaerat qui iste aliquid.
            </p>
            <div className={style.shopnow}>
              <a href='#'>shop now</a>
            </div>
        </div>
    </section>
  );
};

export default HomeSection;
