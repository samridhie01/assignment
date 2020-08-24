import { PlanetData } from "../types/types";
import Planets from "./Planets";
import React from "react";

interface props {
  pData: PlanetData[];
  handleAddToFavs: (element: any) => void;
}
const DisplayPlanets: React.FC<props> = ({ pData, handleAddToFavs }) => {
  return (
    pData &&
    pData.map((element: PlanetData, index: number) => {
      return (
        <Planets
          data={element}
          onSaveClick={() => {
            handleAddToFavs(element);
          }}
        />
      );
    })
  );
};

export default DisplayPlanets;
