import axios from "axios";
import {refreshToken} from "./slices/authSlice.js";
import store from "./store.js";

export const BASE_API = axios.create({
    baseURL: 'https://localhost:3000',
});

BASE_API.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await store.dispatch(refreshToken());
                return BASE_API(originalRequest);
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError);
                throw refreshError;
            }
        }
        return Promise.reject(error);
    }
);