import type { AnyObject, ObjectSchema } from "yup";

export type userType = {
  username: string;
  password?: string;
  email: string;
  role?: "Student" | "Istructor";
};

export type authContextType = {
  user: userType | null;
  is_authenticated: boolean;
  is_loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, username: string, password: string) => void;
  logout: () => void;
  login_errors: number;
  signup_erros: number;
};

export type signupSchemasType = ObjectSchema<
  {
    email: string;
    username: string;
    password: string;
    confirm_password: string;
    accept_terms: NonNullable<boolean | undefined>;
  },
  AnyObject,
  {
    email: undefined;
    username: undefined;
    password: undefined;
    confirm_password: undefined;
    accept_terms: undefined;
  }
>;

export type loginSchemasType = ObjectSchema<
  {
    email_username: string;
    password: string;
  },
  AnyObject,
  {
    email_username: undefined;
    password: undefined;
  }
>;

export type authServiceType = {
  login: (email: string, password: string) => Promise<userType>;
  logout: () => void;
  get_current_user: () => userType | null;
  is_logged_in: () => boolean;
  signup: (
    email: string,
    username: string,
    password: string,
  ) => Promise<userType>;
};
