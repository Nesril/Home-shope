import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {baseurl,fetchApi} from "../component/Api"
import Banner from "../component/Banner"
import Link from 'next/link'
const Test=({url,urlPath,title,discription,recommend,butText})=>(
  <div className={styles.banner}>
      <div className={styles.image}><Image src={url} width={500} 
             height={500}alt='Process..'/></div>
      <div className={styles.bellowImage}>
         <div  className={styles.title}>{title}</div>
           <div  className={styles.describe}>{discription}</div>
         <p  className={styles.recomand}>{recommend}</p>
         <button><Link href={`/search?purpose=${urlPath}`}>Exploring {butText}</Link></button>
      </div>

  </div>
)
export default function Home({propertiesForSale,propertiesForRent}) {
  console.log(propertiesForSale)
  console.log(propertiesForRent)
  return (
  <>
    <section className={styles.container}>
    <div style={{marginTop:"30px"}}>
          <Test url="/home2.jpg" title="SALE A HOME" 
             discription="Sales Homes for Everyone"
             recommend="Explore Apartments, Villas, Homes and more"
             butText="Salling"
             urlPath="for-sale"/>
      </div>
      <article className={styles.sale}>
                {propertiesForSale.map(e=>{
               return <Banner element={e} key={e.id}/>
                })}
      </article>
  
      <div style={{marginTop:"30px"}}>
          <Test url="/home1.jpg" title="RENT A HOME" 
             discription="Rental Homes for Everyone"
             recommend="Explore Apartments, Villas, Homes and more"
             butText="Salling"
             urlPath="for-rent"/>
      </div>
      <article className={styles.rent}>
            {propertiesForRent.map(e=>{
             return <Banner element={e} key={e.id}/>
             })}
      </article>
      
    </section>
 </>
  )
}
/////////////////////////////////////////////////
export async function getStaticProps(){
  let propertyForSale=await fetchApi(`${baseurl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  let propertyForRent=await fetchApi(`${baseurl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return{
    props:{
         propertiesForSale:propertyForSale?.hits,
         propertiesForRent:propertyForRent?.hits,
        }
  }
}












