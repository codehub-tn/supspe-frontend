import * as Yup from "yup";

export const registerValidation = Yup.object({
  role: Yup.string().oneOf(["CUSTOMER", "VENDOR"]),
  name: Yup.string().required(" name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("password is required")
    .min(6, "Password must contain at least 6 characters"),
  tel: Yup.string().required().length(8),
  adress: Yup.string().required(),
});
