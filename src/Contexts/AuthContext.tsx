import React, { useState, useEffect, createContext, useContext } from "react";
import auth_services from "../Services/authService";
import type { authContextType, userType } from "../types/auth.type";

const AuthContext = createContext<authContextType | null>(null);

type props = {
  children: React.ReactNode
}

const AuthProvider = ({ children }: props) => {
  const [user, set_user] = useState<userType | null>(null);
  const [is_authenticated, set_is_authenticated] = useState(false);
  const [is_loading, set_is_loading] = useState(true);
  const [login_errors, set_login_errors] = useState(0);
  const [signup_erros, set_signup_errors] = useState(0);

  useEffect(() => {
    const user = auth_services.get_current_user();
    if (user) {
      set_user(user);
      set_is_authenticated(true);
    }

    set_is_loading(false);
  }, []);

  const login = async (email: string, password: string) => {
    set_is_loading(true);
    try {
      const user = await auth_services.login(email, password);
      if (user) {
        set_user(user);
        set_is_authenticated(true);
      }
      set_is_loading(false);
    } catch {
      console.log("the email or passowrd is uncorrect");
      set_is_loading(false);
      set_is_authenticated(false);
      set_login_errors((prev) => prev + 1);
    }
  };

  const signup = async (email: string, username: string, password: string) => {
    set_is_loading(true);
    try {
      const user: userType = await auth_services.signup(email, username, password);

      if (user) {
        set_is_authenticated(true);
        set_user(user);
        set_is_loading(false);
      }
    } catch {
      set_is_loading(false);
      set_signup_errors((prev) => prev + 1);
    }
  };

  const logout = () => {
    auth_services.logout();
    set_user(null);
    set_is_authenticated(false);
  };

  const value = {
    user,
    is_authenticated,
    is_loading,
    login,
    login_errors,
    signup,
    signup_erros,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider')
  }

  return context;
};

export default AuthProvider;
