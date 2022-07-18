// configuration for our API

import axios from "axios";

let BASE_API_URL = "http://localhost:8080";

let API = axios.create({
    baseURL: BASE_API_URL,
    timeout: 1000
});


export function updateApi(token){
    API.interceptors.request.use(function (config){
        config.headers.Authorization = `Bearer ${token}`
        return config;
    });
}

export default API;