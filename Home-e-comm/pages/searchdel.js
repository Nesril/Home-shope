import { style } from '@mui/system'
import React, { useState } from 'react'
import {baseurl,fetchApi} from "../component/Api"
import Banner from "../component/Banner"
import styles from '../styles/search.module.css'
export default function Search({propertiesForSale,propertiesForRent}) {
let [searchValue,setSearchValue]=useState("")
let filterSale=propertiesForSale.filter(e=>{
    console.log(e.price)
    console.log(searchValue)
    return searchValue===isNaN ?e.price.includes(searchValue.toString()):e.title.toLowerCase().includes(searchValue.toLowerCase())
})
let filterRent=propertiesForRent.filter(e=>{
    return searchValue===isNaN ?e.price.includes(searchValue):e.title.toLowerCase().includes(searchValue.toLowerCase())
})
console.log(filterSale)
console.log(filterSale)
let [choice,setChoice]=useState([{
    name:"Sale",
    isChoice:true,
    id:1
},{
    name:"Rent",
    isChoice:false,
    id:2
}
])
function choiceCliked(id){
    setChoice(ele=>ele.map(e=>{
        return e.id===id?{...e,isChoice:true}:{...e,isChoice:false}
    }))
}
  return (
    <div>
        <div className={styles.searchFor}>
             <h2>Searh For</h2>
             <div className={styles.Alternative}>
                {choice.map(e=>{
                    return <div style={{transition:"1s",border:e.isChoice?"2px dashed goldenrod":"none",padding:"5px"}} key={e.id}><button onClick={()=>choiceCliked(e.id)}>{e.name}</button></div>
                })}
             </div>
        </div>
    {choice.map(e=>{
        return (
    <> {e.isChoice&&   
    <div key={e.id}>
     <div className={styles.searchText}>
        <input type="text" 
           placeholder={`search for ${e.name}`}
           value={searchValue}
           onChange={(e)=>setSearchValue(e.target.value)}
           />
      </div>   
       <div className={styles.container}>
                   <h2>Property For {e.name}</h2>
           <article className={styles.sale}>
                {(e.name==="Sale"?filterSale:filterRent).map(e=>{
               return <Banner element={e} key={e.id}/>
                })}
          </article>
      </div>
    </div>
      }
    </>
        )
    })}
 
    </div>
  )
}
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
