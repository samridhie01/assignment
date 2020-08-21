import axios from 'axios';


export const getPlanetData= async()=>{
   const res = await axios({
        method: 'GET',
        url: `https://swapi.dev/api/planets`
      });
      return res;
}

export const getPlanetDataPage= async(page:number)=>{  
  const res = await axios({
       method: 'GET',
       url: `http://swapi.dev/api/planets/?page=${page}`
     });
     return res;
}

