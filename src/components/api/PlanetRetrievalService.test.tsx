import axios from 'axios';
import {getPlanetData, getSpecificPlanetData} from "./PlanetRetrievalService";
jest.mock('axios', () => jest.fn(() => Promise.resolve({ name: 'Tattoonie' })));



describe("test", ()=>{
    jest.mock('axios', () => jest.fn(() => Promise.resolve({ name: 'Tattoonie' })));
    const data1 = {name: 'Tattoonie'}
    it('should fetch specific planet details', async ()=> {
         await expect(getSpecificPlanetData("?search=abc")).resolves.toEqual(data1);
    });

    it('should fetch planet data', async ()=> {
        jest.mock('axios', () => jest.fn(() => Promise.resolve({ name: 'Tattoonie' })));
        await expect(getPlanetData()).resolves.toEqual(data1);
    });
})
