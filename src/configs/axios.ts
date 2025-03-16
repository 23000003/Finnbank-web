// import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

// export const api = axios.create({
//     baseURL: "http://localhost:8080", // api-gateway
//     withCredentials: true,
// })

// export const api = async ({ method, url, data } : AxiosRequestConfig ) => {

//     const onSuccess = (response: AxiosResponse) => response.data;

//     const onError = (error: AxiosError) => {
//         return error
//     }

//     return conf({ method, url, data}).then(onSuccess).catch(onError)
// }
