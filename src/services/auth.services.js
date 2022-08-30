import { authAPI } from "constants/api";

const { axiosPublic, axiosPrivate } = require("utils/axios");

const register = async (formData) => {
  const response = await axiosPublic.post(authAPI.REGISTER, formData);
  return response.data;
};

const login = async (formData) => {
  const response = await axiosPublic.post(authAPI.LOGIN, formData);
  return response.data;
};

const sendEmailVerification = async () => {
  const response = await axiosPrivate.post(authAPI.SEND_VERIFICATION_EMAIL);
  return response.data;
};

const forgotPassword = async (formData) => {
  const response = await axiosPrivate.post(authAPI.FORGOT_PASSWORD, formData);
  return response.data;
};

const resetPassword = async (password, token) => {
  const response = await axiosPrivate.post(`${authAPI.RESET_PASSWORD}?token=${token}`, {
    password,
  });
  return response.data;
};

const verifyEmail = async (token) => {
  const response = await axiosPrivate.post(`${authAPI.VERIFY_EMAIL}?token=${token}`);
  return response.data;
};

const logout = async () => {};

const authServices = {
  register,
  login,
  sendEmailVerification,
  forgotPassword,
  resetPassword,
  verifyEmail,
  logout,
};

export default authServices;
