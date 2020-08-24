import { render,  } from '@testing-library/react';
import React from "react";
import Header from "./Header";
import SearchBox from "../searchBox/SearchBox";
import {BrowserRouter} from "react-router-dom";


describe("Header", ()=>{
    it('should render snapshot', () => {

        const { asFragment } = render(
            <BrowserRouter>
            <Header path="/favs" linkName={"Favorites"}/>
            </BrowserRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

