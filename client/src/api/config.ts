import { type AxiosRequestConfig } from "axios";
export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}
export default function apiConfig(method: HttpMethod, path: string,authorization: boolean = false, body: any = undefined): AxiosRequestConfig{
    const baseUrl: string = import.meta.env.VITE_APP_API_URL
    console.log(baseUrl)
    return {
        method,
        url: `${baseUrl}${path}`,
        headers: {
            'Content-Type': "application/json",
            ...(authorization && {Authorization: 'xxx'})
        },
        data: body
    };
}