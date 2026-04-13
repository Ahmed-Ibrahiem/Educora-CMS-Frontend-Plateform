import * as yup from "yup";
import type { loginSchemasType } from "../types/auth.type";

export const loginSchamas: loginSchemasType = yup.object({
  email_username: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
});
