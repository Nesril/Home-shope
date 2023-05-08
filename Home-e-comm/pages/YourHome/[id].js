import React, { useContext } from 'react'
import {fetchApi,baseurl} from "../../component/Api"
import ImageSlider from '../../component/ImageSlider'
import SliderImage from "../../component/slide"
import Videos from '../../component/Videos'
import Description from '../../component/description'
export default function Home({propertyDetails,ids}) {
  console.log(propertyDetails)

  return (
    <div>
        <div>
          <SliderImage data={propertyDetails.photos}/>
        </div>
        <div><Description data={propertyDetails}/></div>
       <div>
           <Videos data={propertyDetails.videos}/>
        </div>
    </div>
  )
}

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseurl}/properties/detail?externalID=${id}`);
  return {
  props: {
  propertyDetails: data,
  ids:id
  },
  };
  }
