import React from 'react'
import {Flex,Select,Icon,Spinner,} from "@chakra-ui/react"
import { useRouter } from 'next/router'
import {filterData,getFilterValues} from "./Data"
import { useState } from 'react'
import styles from "../styles/search.module.css"
export default function FiltterAlternative() {
   let [filters,setFilters]=useState(filterData)
   let router=useRouter()
   let [path,setpath]=useState(router.pathname)
   let [query,setquery]=useState(router.query)
   ////use to update the ul
   function searchProp(filterValue){
      setpath(router.pathname)
      setquery(router.query)
      const values=getFilterValues(filterValue)
      values.forEach(e=>{
         if(e.value&&filterValue?.[e.name]){
            query[e.name]=e.value
          }
      })
    
   }

   function newPropertiesAdded(){
      router.push({pathname:path,query})
      console.log({pathname:path,query})
   }
  return (
    <div>
       <Flex bg="gray.400" p="4" justifyContent="center" flexWrap="wrap"> 
           {filters.map(e=>{
            return(
               <div key={e.queryName}>
                   <Select 
                    className={styles.each}
                   placeholder={e.placeholder}
                   p="2"
                   onChange={(valu)=>searchProp({[e.queryName]:valu.target.value})}
                   >
                     {e.items.map(e=>{
                        return <option value={e.value} key={e.value}>{e.name}</option>
                     })}
                   </Select>
              

               </div>
            )
           })}
       </Flex>
       <div className={styles.makeProps}>
         <button onClick={newPropertiesAdded}>Make Pros..</button>
       </div>
    </div>
  )
}
