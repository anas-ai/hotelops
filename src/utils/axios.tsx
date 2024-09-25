// src/api/axiosInstance.ts

import axios from "axios";


// Create an Axios instance with base URL and default options

export const hotel_access_token =
  "ujhj45ON8BKl!udLGPu!szcWtY!e9MTm4jpXSqD7wNM1HITpnbJhhp=aElxgkShcdaBhvgqLeOMjz9G?qliY6FK/AcJN0iTB3fIl5g55bllJHdrF-Yh-O4W-eEjKaPk/DBGqHU6XDhbG5m68RtVxZGH?B6n1F5u=F84npBeJIMS/SzrT7=dXuAj=8aqDyvRpIh=nswd!XPTMobzhw2jKxocrOYJkzo0osZFSMxK1hMqRbqGJIKR=bgRfS!cea11f";
const axiosInstance: any = axios.create({
  baseURL: "https://hotelops.in/api/", 
  //   timeout: 10000, // Optional, defines a timeout (in milliseconds)
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "hotel-api-token": hotel_access_token,
  },
});

// Request interceptor to modify or add to the request config
axiosInstance.interceptors.request.use(
  (config: any): any => {

    return config;
  },
  (error: any) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor to handle the response globally
axiosInstance.interceptors.response.use(
  (response: any): any => {

    return response;
  },
  (error: any) => {
    // Handle response error globally
    return Promise.reject(error);
  }
);

export default axiosInstance;

