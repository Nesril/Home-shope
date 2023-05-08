import React from 'react'
import ReactPlayer from 'react-player'
import styles from "../styles/sliderImage.module.css"
export default function Videos({data}) {
  return (
    <div className={styles.Videos}>
     {data.map(e=>{
        return   <ReactPlayer url={e.url} />
     })}
    </div>
  )
}
