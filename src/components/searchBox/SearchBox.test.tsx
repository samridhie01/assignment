import SearchBox from "./SearchBox";
import { render, getByTestId, fireEvent } from '@testing-library/react';
import React from "react";
import {getSearchKey} from "../utils/utils";


describe("Search Box", ()=>{

    const renderComponent = () => render(
        <SearchBox handleSearch={jest.fn} />
    );

    it('should render snapshot', () => {
        const { asFragment } = render(
            <SearchBox handleSearch={jest.fn} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should handle search button', () => {
        const filterName= "arid";
        const {getByTestId} = renderComponent();
        const searchTxt = getByTestId("climate-filter")
        expect(searchTxt).toBeInTheDocument();
        fireEvent.change(searchTxt, {target: {value :filterName}});
        expect(getSearchKey()).toEqual(filterName)
    });
})

