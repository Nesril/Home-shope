import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "../styles/sliderImage.module.css"
export default function Slide({data}) {
  let [currrent,setCurrent]=useState(0)
  let length=data.length
  let nextSlide=()=>{
    setCurrent(currrent===length-1?0:currrent+1)
  }

  let prevSlide=()=>{
    setCurrent(currrent===0?length-1:currrent-1)
  }
  if(!Array.isArray(data)||data.length<=0){
    return null
  }
  return (
    <div className={styles.slider}>
       <ArrowBackIosIcon className={styles.left} onClick={prevSlide}/>
       <ArrowForwardIosIcon className={styles.right} onClick={nextSlide}/>
       {data.map((slide,index)=>{
       
   
        return (
          <div key={index} className={index===currrent?styles.active:styles.slide}>
            <div className={styles.corect}>
               <img src={slide.url} alt="...travel" className={styles.image}/>
            </div>
             
             
          </div>
        )
       })}
    </div>
  )
}
