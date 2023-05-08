import React from 'react'
import Image from 'next/image'
import millify from 'millify'
import Link from 'next/link'
import {FaBed,FaBath} from "react-icons/fa"
import {BsGridFill} from "react-icons/bs"
import {Goverfied} from "react-icons/go"
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GppGoodIcon from '@mui/icons-material/GppGood';
import styles from "../styles/banner.module.css"
import CropLandscapeIcon from '@mui/icons-material/CropLandscape';
export default function Banner({element}) {

  return (
    <div className={styles.banner}>
      <Link href={`/YourHome/${element.externalID}`} passHref>
          <div><img src={element.coverPhoto?element.coverPhoto.url:"flower.jpg"} width={400} height={260} alt="...Loading" /></div>
      </Link>
      <div className={styles.bellowImage}>
        <div className={styles.mony_logo}>
          <div className={styles.money}>
            <div><GppGoodIcon/></div>
            <div>AED ${millify(element.price)}{element.purpose=="for-rent"&&`/${element?.rentFrequency}`}</div>
          </div>
            <div ><Avatar className={styles.logo} src={element.agency.logo.url}/></div>
        </div>
         <div className={styles.description}>
                  <div> 
                      <div><HotelIcon/>  </div>
                      <div>{element.rooms}</div>
                   </div>
                  <div>|</div>
                  <div> 
                      <div><BathtubIcon/> </div>
                      <div> {element.baths}</div>
                   </div>
                  <div>|</div>
                  <div> 
                      <div><CropLandscapeIcon/>  </div>
                      <div>{millify(element.area)} sqft</div>
                   </div>
         </div>
          <div className={styles.title}>{element.title.length>30?`${element.title.slice(0,30)}...`:element.title}</div>
  
     </div>
    </div>
  )
}
