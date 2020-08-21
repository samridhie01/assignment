import React, { useEffect } from "react";

const Details = () =>{
    useEffect(()=>{
        console.log("param",window.location.search);
        
    })
    return(
        <span>Hello world</span>
    )
}

export default Details;