'use client'
import React, { useState } from 'react'
import style from "@/app/style/Review.module.css"
const reviews =[
  { img: "/img1.jpg", name: "John Smith", status: "Happy" },
  { img: "/img2.jpg", name: "Smith", status: "Happy" },
  { img: "/img3.jpg", name: "Alice", status: "Happy" },
  { img: "/img4.jpg", name: "Jame", status: "Happy" },
]
const Review = () => {
  const [start,setStartReview] = useState(0)
  const numRev =3
  const handleNext = () =>{
    setStartReview((prevStart:any)=>(prevStart-numRev+reviews.length)%reviews.length)
  }
  const handlePrev = () => {
    setStartReview((prevStart:any) => (prevStart + numRev) % reviews.length);
  };

  const displayedReviews = reviews.slice(start, start + numRev).concat(
    reviews.slice(0, Math.max(0, (start + numRev) - reviews.length))
  );
  return (
    <section id='review'>
      <h1 className={style.heading}>Customer's <span>Review</span></h1>
      <div className={style.carousel} >
        {displayedReviews.map((review):any=>(
          <div className={style.box_review}>
            <img src={review.img} alt={review.name} />
            <h3>{review.name}</h3>
            <h4>{review.status}</h4>
          </div>
        ))}
        <div className={`${style.btn} ${style.btn_prev}`} onClick={handlePrev}>
          ❮
        </div>
        <div className={`${style.btn} ${style.btn_next}`} onClick={handleNext}>
          ❯
        </div>
      </div>
    </section>
  )
}

export default Review