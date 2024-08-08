import axios from "axios";

const ApiManager = axios.create({
    baseURL: 'https://super-brian.runit-dev.fr/api',
    //baseURL: 'replace with Prod url',
    responseType: 'json',
    withCredentials: true,
})

export default ApiManager