import React, { useState } from 'react'
import {fetchApi,baseurl} from "../component/Api"
import FilterListIcon from '@mui/icons-material/FilterList';
import styles from "../styles/search.module.css"
import Banner from "../component/Banner"
import { useRouter } from 'next/router';
import FiltterAlternative from "../component/FiltterAlternative"
export default function Searchs({properties}) {
  let [search,setSearch]=useState(false)
  let [searchValue,setSearchValue]=useState("")

  function searchClicked(){
    setSearch(!search)
  }
  let router=useRouter()
  console.log(properties)
  let filterProperties=properties.filter(e=>{
    return searchValue===isNaN ?e.price.includes(searchValue):e.title.toLowerCase().includes(searchValue.toLowerCase())
})
  return (
  <section>
    <div className={styles.visibleforProperties} >
       <h2>Search For Properties</h2>
       <div><FilterListIcon style={{marginLeft:"10px",color:"gold", cursor:"pointer"}} onClick={searchClicked}/></div>
    </div>
    {search&&
  <div className={styles.searchText}>
    <input type="text" 
       placeholder={`search for `+(router.query.purpose?router.query.purpose:"Properties")}
       value={searchValue}
       onChange={(e)=>setSearchValue(e.target.value)}
       />
  </div> }
    <div><FiltterAlternative/></div>
  
  <div className={styles.container}>
                   <h2>	Properties {router.query.purpose}</h2>
           <article className={styles.sale}>
                {properties.length===0?
                <h1>Nothing..</h1>
                :filterProperties.map(e=>{
               return <Banner element={e} key={e.id}/>
                })}
          </article>
      </div>
    
  </section>
  )
}


export async function getServerSideProps({ query }) {
  function is_defined(queryName,queryData){
    if(queryData){
      return "&dfg"+queryName+"="+queryData
    }
    return "&dfgvjhvhjmvmjv"+queryName+"="+queryData
  }
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';
  const data = await fetchApi(`${baseurl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  return {
  props: {
  properties: data?.hits,
  },
  };
  }