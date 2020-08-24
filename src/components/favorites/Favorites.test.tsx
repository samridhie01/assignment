import {render, fireEvent, getByText, getByTestId, wait} from "@testing-library/react";

import React from "react";
import Favorites from "./Favorites";
import {BrowserRouter} from "react-router-dom";


describe("Favorites Page", ()=>{

    localStorage.setItem("favs",JSON.stringify([{"name":"abc", "climate":"def"}]));
    const renderComponent = ()=>
        render(
            <BrowserRouter>
                <Favorites/>
            </BrowserRouter>)


    it("renders screenshot", ()=>{
        const { asFragment } = render(
            <BrowserRouter>
            <Favorites />
             </BrowserRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("validate removal of favorites item", ()=>{
        const {getByText} = renderComponent();
        const removeBtn = getByText("Remove");
        expect(removeBtn).toBeInTheDocument();
        fireEvent.click(removeBtn);
        expect(localStorage.getItem("favs")).toEqual("");
        expect(getByText("NO DATA TO SHOW"))
    })
})
