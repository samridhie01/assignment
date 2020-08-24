import {render} from "@testing-library/react";

import React from "react";
import PlanetTile from "./PlanetTile";
import {BrowserRouter} from "react-router-dom";

describe("Search Box", ()=>{
    it('should render snapshot', () => {
        const { asFragment } = render(
            <BrowserRouter>
            <PlanetTile name={"abc"} climate={"def"} />
            </BrowserRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
})
