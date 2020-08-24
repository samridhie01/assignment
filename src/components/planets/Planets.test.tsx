import {render, fireEvent, getByTestId} from "@testing-library/react";
import React from "react";
import Planets from "./Planets";
import {PlanetData} from "../types/types";
import {BrowserRouter} from "react-router-dom";

describe("Search Box", () => {
    const mockData: PlanetData = {
        name: "abc",
        climate: " def"
    }

    const renderComponent = render(
        <BrowserRouter>
            <Planets data={mockData} onSaveClick={jest.fn}/>
        </BrowserRouter>
    );

    it('should render snapshot', () => {
        const {asFragment} = renderComponent;
        expect(asFragment()).toMatchSnapshot();
    });

    it("should display fav icon against planet tile", ()=>{
        const {getByTestId} = renderComponent;
        const favBtn = getByTestId("favIcon")
        expect(favBtn).toBeInTheDocument();
    })




})
