import { selector } from "recoil";

import axios from "axios";
import { searchState } from "../atoms/searchState";


const API_URL = 'https://api.unsplash.com/search/photos'
const API_KEY = 'U4fFfoR8ciMPYzXiufeMSCRVkjjZxLG7w-_ZfrlMRWw'
const PER_PAGE = 30


export const imageData = selector({
    key: 'imageData',
    get: async ({get})=>{
        const searchValue = get(searchState)
        const pageValue = 100

        try {
            const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)

        } catch (error) {
            console.log(error)            
        }

    }
})