import apiConfig, { HttpMethod } from "@/api/config";
import axios from "axios";

export async function login(email: string, password: string){
    const path = `/login`;
    const paylaod = {
        email, password
    }
    const config = apiConfig(HttpMethod.POST, path, false, paylaod);
    return axios(config).then(response => response).catch(error => error)
}