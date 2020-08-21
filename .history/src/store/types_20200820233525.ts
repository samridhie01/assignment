export interface PlanetData {
import { addPlanetData } from '../actions/index';
import { ADD_PLANETDATA } from '../../.history/src/constants/action-types_20200820232547';
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

  export interface Planets {
    planetData: PlanetData[];
  }

  interface AddPlanetData{
      type: typeof ADD_PLANETDATA
  }

  export type PlanetActionTypes = AddPlanetData