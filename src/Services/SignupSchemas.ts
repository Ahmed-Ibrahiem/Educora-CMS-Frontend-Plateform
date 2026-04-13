import * as yup from "yup";
import type { signupSchemasType } from "../types/auth.type";
 
export const SignupSchemas: signupSchemasType = yup.object({
  email: yup
    .string()
    .required("please enter your email")
    .test("email-regex", "please enter the correct email", (fValue) => {
      const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return email_regex.test(fValue);
    }),

  username: yup.string().required("please enter your username"),

  password: yup
    .string()
    .required("please enter your password")
    .test(
      "password-regex",
      "Password must be at least 8 characters long and include A, a, 123, and &@$#.",
      (fValue) => {
        const password_regex =
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        return password_regex.test(fValue);
      },
    ),

  confirm_password: yup
    .string()
    .required("please enter your password")
    .oneOf([yup.ref("password")], "Passwords must match"),

  accept_terms: yup
    .boolean()
    .required("this is required")
    .oneOf([true], "You must agree to the Terms Policy "),
});
