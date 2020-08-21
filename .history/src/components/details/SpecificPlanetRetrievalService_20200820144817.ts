import axios from 'axios';


export const getSpecificPlanetData= async(name: string)=>{
   const res = await axios({
        method: 'GET',
        url: `https://swapi.dev/api/planets?${name}`
      });
      return res;
} 