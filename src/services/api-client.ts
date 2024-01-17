import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'fb53cc0c7f964c78997a4cb49f84656b'
    }
})