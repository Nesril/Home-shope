import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function ImageSlider({data}) {

 let item=data.photos.map(e=>{
  return(
    <div key={e.id} >
        <img src={e.url} width="100px" height="200px" alt='..Loading'/>
    </div>
  )
 })

   console.log(data.photos)
  return (
    <div>
     <Carousel style={{padding:"20px"}} width="50%" height="300px">                  
             {item}  
   </Carousel>
    </div>
  )
}
