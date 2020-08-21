import { addPlanetData } from '../actions/index';
import { ADD_PLANETDATA } from '../constants/action-types';

export interface Planet {

    climate: string;
    created: Date;
    diameter: number;
    edited: Date;
    films: string[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
  }

  export interface PlanetState {
    planetData: Planet[];
  }

  interface AddPlanetData{
      type: typeof ADD_PLANETDATA,
      payload: Planet
      
  }

  export type PlanetActionTypes = AddPlanetData