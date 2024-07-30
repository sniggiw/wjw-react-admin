import axios, { AxiosRequestConfig } from "axios";

export default class Axios {
    private instance;

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);

        this.interceptors();
    }

    public request<T>(config: AxiosRequestConfig) {
        return this.instance.request<T>(config);
    }

    private interceptors() {
        this.interceptorsRequest();
        this.interceptorsResponse();
    }

    private interceptorsRequest() {
        this.instance.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }
    private interceptorsResponse() {
        this.instance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }
}
