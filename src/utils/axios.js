import axios from "axios";
import { BASE_URL } from "constants/api";
// import { refreshToken } from "redux/authSlice";
import store from "redux/store";
import jwt_decode from "jwt-decode";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});

axiosPrivate.interceptors.request.use(
  async (req) => {
    const accessToken = store?.getState()?.auth?.tokens?.access?.token;

    let currentDate = new Date();
    if (accessToken) {
      const decodedToken = jwt_decode(accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        // await store.dispatch(refreshToken());
        if (req?.headers) {
          req.headers["Authorization"] = `Bearer ${accessToken}`;
        }
      } else {
        req.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }
    return req;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
