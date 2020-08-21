import React, { useEffect } from "react";

const Details = () =>{
    useEffect(()=>{
        console.log(window.location.search);
        
    })
    return(
        <span>Hello world</span>
    )
}

export default Details;