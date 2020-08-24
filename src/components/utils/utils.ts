import { PlanetData } from "../types/types";

export const  comparePlanets = function(data:PlanetData):boolean {
  let foundElem = false;
 if (localStorage.getItem("favs") != null) {
    const addedFavs = JSON.parse(localStorage.getItem("favs")!);
    addedFavs.forEach((element: PlanetData) => {
      if (element.name === data.name) {
        foundElem=  true;
      }
    });
  }
  return foundElem;
};

export const getSearchKey =()=>{

    return (localStorage.getItem("searchKey") || "");
};

export const getPageNum =()=>{
    return localStorage.getItem("page");
};

export const setPageNum = (page:string) =>{
    localStorage.setItem("page", page);
}
