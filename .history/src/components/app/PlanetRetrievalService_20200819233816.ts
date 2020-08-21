import axios from 'axios';

export const getPlanetData= axios({
    method: 'GET',
    url: `https://swapi.dev/api/planets`
  });