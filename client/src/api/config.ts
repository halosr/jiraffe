import { type AxiosRequestConfig } from "axios";
export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}
export default function apiConfig(method: HttpMethod, path: string,authorization: boolean = false, body: any = undefined): AxiosRequestConfig{
    return {
        method,
        url: `http://localhost:4567${path}`,
        headers: {
            'Content-Type': "application/json",
            ...(authorization && {Authorization: 'xxx'})
        },
        data: body
    };
}