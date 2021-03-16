import axios from "axios";

export const api = axios.create({
    method: "GET",
    baseURL: "https://pokeapi.co/api/v2/",
});
