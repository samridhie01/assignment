import axios from 'axios';


export const getPlanetData= async()=>{
   const res = await axios({
        method: 'GET',
        url: `https://swapi.dev/api/planets`
      });
      return res;
}

