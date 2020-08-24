export interface PlanetData{
    name: string,
    climate: string
  }

export interface PlanetsProps {
    data: PlanetData;
    onSaveClick: (element: any) => void;
}
