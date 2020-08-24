import React from 'react';
import {render, getByTestId} from '@testing-library/react';
import App from '../app/App';
import {BrowserRouter} from "react-router-dom";

describe("App page", () => {

    const renderComponent = () =>  render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )



    it('renders learn react link', () => {
        const {getByTestId} = renderComponent();
        expect(getByTestId("HomePage")).toBeInTheDocument();
        expect(getByTestId("HomePage")).toBeInTheDocument();

    });
})

