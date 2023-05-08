import axios from "axios"

export const  baseurl='https://bayut.p.rapidapi.com'
/*headers: {
    'X-RapidAPI-Key': '2001431d09msh3ee57fcc3b10c92p171748jsnc967865853d2',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }*/
export const fetchApi= async (url)=>{
    const {data}=await axios.get((url),{
      headers: {
        'X-RapidAPI-Key': '2001431d09msh3ee57fcc3b10c92p171748jsnc967865853d2',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    })
    return data
}
