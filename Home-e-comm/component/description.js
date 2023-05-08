import React from 'react'
import millify from 'millify'
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GppGoodIcon from '@mui/icons-material/GppGood';
import styles from "../styles/sliderImage.module.css"
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
export default function description({data}) {
    let des=data.description.split("•")
    console.log(des)
  return (
    <div>
       <div className={styles.bellowImage}>
        <div className={styles.mony_logo}>
            <div><GppGoodIcon/></div>
            <div>AED ${millify(data.price)}{data.purpose=="for-rent"&&`/${data?.rentFrequency}`}</div>
        </div>
         <div className={styles.description}>
                  <div> 
                      <div><HotelIcon/>  </div>
                      <div>{data.rooms}</div>
                   </div>
                  <div>|</div>
                  <div> 
                      <div><BathtubIcon/> </div>
                      <div> {data.baths}</div>
                   </div>
                  <div>|</div>
                  <div> 
                      <div><CropLandscapeIcon/>  </div>
                      <div>{millify(data.area)} sqft</div>
                   </div>
         </div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.destitle}>Discription About the place</div>
          <div className={styles.des}>{des.map((e,index)=>{
            return(
                <ul key={index}>
                    <li>{e}</li>
                </ul>
            )
          })}</div>
          {data.furnishingStatus&&
        <div className={styles.furnished}>
          <div >Furnished Status</div>
          <div> {data.furnishingStatus}</div>
        </div>
          }
        {data.purpose&&
        <div className={styles.furnished}>
          <div >purpose </div>
          <div> {data.purpose}</div>
        </div>
          }
          <h2 className={styles.textTitle}>Amenities</h2>
          <div className={styles.text}>
             {data.amenities.map(item=>item.amenities.map(e=>{
                return <div key={e.externalID} className={styles.eachText}>{e.text_l2} </div>
             }))}
          </div>
     </div>
    </div>
  )
}
