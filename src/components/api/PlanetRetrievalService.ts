import axios from "axios";
import {getPageNum} from "../utils/utils";

export const planeturl = "http://swapi.dev/api/planets";
export let getPlanetData = async () => {
  let page = getPageNum();
  if(page==null){
    page ="1";
  }
  const res = await axios({
    method: "GET",
    url: `${planeturl}/?page=${page}`
  });
  return res;
};

export let getSpecificPlanetData= async(name: string)=>{
  const res = await axios({
    method: 'GET',
    url: `${planeturl}${name}`
  });
  return res;
}

