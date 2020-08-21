import axios from "axios";

const currentVersion = 2;
let data = localStorage.getItem("data");
let version = localStorage.getItem("version");

export const getPlanetData = async () => {
  const res = await axios({
    method: "GET",
    url: `https://swapi.dev/api/planets`
  }).then(response => {
    data = response.data.results;
    localStorage.setItem("data", response.data.results);
    localStorage.setItem("version", currentVersion);
  });
  return res;
};

export const getPlanetDataPage = async (page: number) => {
  const res = await axios({
    method: "GET",
    url: `http://swapi.dev/api/planets/?page=${page}`
  });
  return res;
};
