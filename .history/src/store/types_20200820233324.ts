export interface PlanetData {
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