import react from 'react';
import { Header } from "./header/Header";

import Planets from "./planets/Planets";

import Pagination from "@material-ui/lab/Pagination";

const HomePage = () =>{
    return (
    <div>
    <Header />
    <SearchBox />
    {planetData && 
    planetData.map((element: any, index: number)=>{
      return(
        <Planets name={element.name} climate={element.climate} />
      )
    })
    }
    </div>
  <Pagination count={10} variant="outlined" shape="rounded" />
    )

}