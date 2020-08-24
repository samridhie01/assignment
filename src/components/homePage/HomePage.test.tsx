import React from 'react';
import {render, wait, getByTestId, getByText} from '@testing-library/react';
import HomePage from "./HomePage";
import {BrowserRouter} from "react-router-dom";
import * as PlanetService from "../api/PlanetRetrievalService";


describe("Home Page", ()=>{

    // @ts-ignore
    PlanetService.getPlanetData = jest.fn().mockResolvedValueOnce({
        data:{
            results:[{
                "name": "Tatooine",
                "rotation_period": "23",
                "orbital_period": "304",
                "diameter": "10465",
                "climate": "arid",
                "gravity": "1 standard",
                "terrain": "desert",
                "surface_water": "1",
                "population": "200000",
                "residents": [
                    "http://swapi.dev/api/people/1/",
                    "http://swapi.dev/api/people/2/",
                    "http://swapi.dev/api/people/4/",
                    "http://swapi.dev/api/people/6/",
                    "http://swapi.dev/api/people/7/",
                    "http://swapi.dev/api/people/8/",
                    "http://swapi.dev/api/people/9/",
                    "http://swapi.dev/api/people/11/",
                    "http://swapi.dev/api/people/43/",
                    "http://swapi.dev/api/people/62/"
                ],
                "films": [
                    "http://swapi.dev/api/films/1/",
                    "http://swapi.dev/api/films/3/",
                    "http://swapi.dev/api/films/4/",
                    "http://swapi.dev/api/films/5/",
                    "http://swapi.dev/api/films/6/"
                ],
                "created": "2014-12-09T13:50:49.641000Z",
                "edited": "2014-12-20T20:58:18.411000Z",
                "url": "http://swapi.dev/api/planets/1/"
            }]
        }  } )

    const renderComponent = () =>render(
        <BrowserRouter>
        <HomePage handleAddToFavs={jest.fn}/>
        </BrowserRouter>
    )

    it('should render the all ui skeleton', async function () {
        const {getByTestId} = renderComponent();
        await wait (()=>{
            expect(getByTestId("header-section")).toBeInTheDocument();
            expect(getByTestId("planets-section")).toBeInTheDocument();
            expect(getByTestId("search-section")).toBeInTheDocument();
            expect(getByTestId("page-bar-section")).toBeInTheDocument();
        })

    });

    it("should render empty list when it does not matches any climate", ()=>{
       const {getByTestId} = renderComponent();
        localStorage.setItem("searchKey", "none");
        // expect(getByTestId("search-update")).toBeInTheDocument();
    })
})
