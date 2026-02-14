import * as Yup from "yup";

export const signupValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .required("Password is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
