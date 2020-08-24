import {render} from "@testing-library/react";
import React from "react";
import NoPlanetData from "./NoPlanetData";

describe("Search Box", ()=>{
    it('should render snapshot', () => {
        const { asFragment } = render(
            <NoPlanetData />
        );
        expect(asFragment()).toMatchSnapshot();
    });
})
