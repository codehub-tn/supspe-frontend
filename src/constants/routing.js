export const HOME = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const FORGOT = "/forgot_password";
export const RESET = "/reset_password";
export const VERIFY = "/verify_email";
export const DETAIL = "/products";
export const CATEGORIE = "/categories/:categorie_name";
export const ADMIN = "/admin";
export const ACCOUNT = "/account";
export const SHOPS = "/shops/browse";
export const STORE = (storeName) => `/stores/${storeName}`;

const routing = {
  HOME,
  LOGIN,
  REGISTER,
  FORGOT,
  VERIFY,
  DETAIL,
  SHOPS,
  STORE,
  CATEGORIE,
  ACCOUNT,
  ADMIN,
  RESET,
};

export default routing;
