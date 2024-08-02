import axios, { AxiosRequestConfig } from "axios";

export default class Axios {
    private instance;

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);

        this.interceptors();
    }

    public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.instance.request<D>(config);
                return resolve(response.data);
            } catch (error) {
                return reject(error);
            }
        });
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
