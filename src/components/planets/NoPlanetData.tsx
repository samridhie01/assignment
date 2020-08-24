import React from "react";
import {getSearchKey} from "../utils/utils";

const NoPlanetData = ()=>{
    return(
        <h3>no planet with climate {getSearchKey()}</h3>
    )
}

export default  NoPlanetData;
