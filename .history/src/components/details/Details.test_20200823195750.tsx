import axios, {AxiosResponse, AxiosStatic} from 'axios';
import { getSpecificPlanetData } from './SpecificPlanetRetrievalService';
import moxios from 'moxios';
import sinon from 'sinon';
import {mocked} from "ts-jest";
import {PlanetData} from "../module/types";


interface AxiosMock extends AxiosStatic {
    mockResolvedValue: Function
    mockRejectedValue: Function
  }
  

describe('fetch data of planet', ()=>{
    jest.mock('axios');
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    it("fetch single planet data ", async()=>{
        const users = [{name: 'Bob'}];
        const resp = {data: users};
        mockedAxios.get.mockResolvedValue(resp);

        // or you could use the following depending on your use case:
        // axios.get.mockImplementation(() => Promise.resolve(resp))

        return getSpecificPlanetData("?search=abc").then(data => expect(data).toEqual(users));

    })

});
