"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
  const zoomInProperties = {
    scale: 1,
    duration: 4000,
    transitionDuration: 300,
    infinity: true,

    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <FaChevronLeft className="h-8 w-8 text-white cusor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-40 md:top-72">
        <FaChevronRight className="h-8 w-8 text-white cusor-pointer" />
      </div>
    ),
  };

  return (
    <div className="w-full h-[20px] mt-40">
      <Zoom {...zoomInProperties}>
        {images.map((each, index)=>(
            <div key={index} className='flex justify-center md:items-center items-start w-screen h-screen relative'>
             <img className='w-screen' src={each} alt={`Slide ${index + 1}`}/>             
           </div>
        ))}
       </Zoom>
    </div>
  );
};

export default Slider;
