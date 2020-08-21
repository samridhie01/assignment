import axios from 'axios';


export const getPlanetData= async(name: string)=>{
   const res = await axios({
        method: 'GET',
        url: `https://swapi.dev/api/planets?search=${name}`
      });
      return res;
} 