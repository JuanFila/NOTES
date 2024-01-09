import axios from "axios";

export const api = axios.create({
    baseURL: "https://notes-api-mkh4.onrender.com"
})