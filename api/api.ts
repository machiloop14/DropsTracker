import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  setTokens,
} from "../auth/authStore";

// Extend Axios config to include _retry
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

interface RefreshResponse {
  success: boolean;
  message: string;
  data: {
    newAccessToken: string;
    newRefreshToken: string;
  };
}

const api: AxiosInstance = axios.create({
  baseURL: "http://10.233.60.20:8083",
});

// =========================
// REQUEST INTERCEPTOR
// =========================
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();

  console.log("api initial token check: " + token);

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// =========================
// REFRESH CONTROL VARIABLES
// =========================
let isRefreshing = false;

// each subscriber waits for new token
let subscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
  subscribers.forEach((cb) => cb(token));
  subscribers = [];
};

const addSubscriber = (cb: (token: string) => void) => {
  subscribers.push(cb);
};

// =========================
// RESPONSE INTERCEPTOR
// =========================
api.interceptors.response.use(
  (response: AxiosResponse) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    // Only handle 401 errors
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      // If already refreshing → queue request
      if (isRefreshing) {
        return new Promise<AxiosResponse>((resolve) => {
          addSubscriber((token: string) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            resolve(api(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = await getRefreshToken();

        const res = await axios.post<RefreshResponse>(
          "http://10.233.60.20:8083/auth/refresh",
          { token: refreshToken }
        );

        const { newAccessToken, newRefreshToken } = res.data.data;
        console.log("api newaccesstoken: " + newAccessToken);
        console.log("api newrefreshtoken: " + newRefreshToken);

        await setTokens(newAccessToken, newRefreshToken);

        isRefreshing = false;
        onRefreshed(newAccessToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        }

        return api(originalRequest);
      } catch (err) {
        isRefreshing = false;
        await clearTokens();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
