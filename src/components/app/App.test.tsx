import React from 'react';
import { createMemoryHistory } from 'history'
import {render, getByTestId} from '@testing-library/react';
import App from '../app/App';
import {BrowserRouter} from "react-router-dom";
import { Router } from 'react-router-dom'

describe("App page", () => {

    it('renders details section with correct path', () => {
        const history = createMemoryHistory();
        const route = '/details'
        history.push(route)
        const { getByTestId } = render(
            <Router history={history}>
                <App />
            </Router>
        )
        expect(getByTestId("details-section")).toBeInTheDocument()

    });

    it('renders favorite page with correct path', () => {
        const history = createMemoryHistory();
        const route = '/favs'
        history.push(route)
        const { getByTestId } = render(
            <Router history={history}>
                <App />
            </Router>
        )
        expect(getByTestId("favorties-section")).toBeInTheDocument()

    });

    it('renders Homepage with correct path', () => {
        const history = createMemoryHistory();
        const { getByTestId } = render(
            <Router history={history}>
                <App />
            </Router>
        )
        expect(getByTestId("HomePage")).toBeInTheDocument()

    });
})

