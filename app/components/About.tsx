import React from 'react'
import style from "@/app/style/About.module.css";

const About = () => {
  return (
    <section id='about' className={style.about}>
      <h1 className={style.heading}><span>about</span> us </h1>
      <div className={style.row}>
        <div className={style.video_cotainer}>
          <video src='/video/video_flower1.mp4' loop autoPlay muted></video>
          <h3>best flower sellers</h3>
        </div>
        <div className={style.content}>
          <h3>Why choose us?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, 
            iusto quisquam. Dolores odio sapiente consectetur dolorem vero 
            recusandae deleniti quis sequi corporis praesentium libero iure 
            debitis dolorum, neque minima nostrum.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Error quia ut alias laboriosam minus, veritatis expedita 
            commodi. Quo, distinctio molestias. Ducimus sit hic officia 
            eos tempora perspiciatis totam esse quos!
          </p>
          <a href='#' className={style.btn}>learn more</a>
        </div>
      </div>
    </section>
  )
}

export default About