import { useForm } from "react-hook-form";
import FormBox from "../../Components/FormBox";
import Master_button from "../../Components/UI/Master_button";
import { loginSchamas } from "../../Services/LoginSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthContext } from "../../Contexts/AuthContext";
import React, { useEffect, type SetStateAction } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type propsType = {
  is_login_page: boolean;
  set_is_login_page: React.Dispatch<SetStateAction<boolean>>;
  toggle_forget_password: () => void;
};

const Login_form = ({
  is_login_page,
  set_is_login_page,
  toggle_forget_password,
}: propsType) => {
  // Initialize the form with default values and Yup validation schema
  const login_form = useForm({
    defaultValues: {
      email_username: "",
      password: "",
    },
    resolver: yupResolver(loginSchamas),
  });

  // Get authentication state and actions from context
  const { login, is_loading, is_authenticated, login_errors } =
    useAuthContext();

  /* Extract form utilities */
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = login_form;

  // Handle form submission and trigger login function
  const onSubmit = async (data: {
    email_username: string;
    password: string;
  }) => {
    login(data.email_username, data.password);
  };

  // Listen for login errors from context and display them on form fields
  useEffect(() => {
    if (login_errors <= 0) return;

    // If authentication failed, set manual errors on inputs
    if (!is_authenticated) {
      setError("email_username", {
        message: "The email or password is not correct",
      });
      setError("password", {
        message: "The email or password is not correct",
      });
    }
  }, [login_errors]);

  // React Router navigation hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Get the previous page user came from (fallback to home "/")
  const from = location.state?.from || "/";

  // Navigate back to previous page after successful login
  const go_back = () => {
    navigate(from, { replace: true });
  };

  return (
    <div
      className={`${login_form_style} ${
        is_login_page ? "relative top-0 left-0" : "absolute -left-full"
      }`}
    >
      {/* ===== Loading Overlay ===== */}
      {is_loading && (
        <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] elements-center-row z-20">
          <p className="text-md text-gray">Loading...</p>
        </div>
      )}

      {/* ===== Success State UI ===== */}
      {is_authenticated && (
        <div className="h-full w-full bg-white elements-center-column gap-5 rounded-[5px] absolute top-0 left-0 z-50">
          {/* Success icon */}
          <img src="/assets/check.png" className="w-20 h-20 " alt="" />

          {/* Success message */}
          <p className="text-[24px] text-dark font-bold">Login Successfully</p>

          {/* Button to return to previous page */}
          <Master_button style={"mt-[50px]"} action={go_back}>
            <span>Go Back</span>
          </Master_button>
        </div>
      )}

      {/* ===== Form Header ===== */}
      <h1 className="text-[30px] text-dark font-bold text-center">Login</h1>

      {/* Switch to signup page */}
      <p className="text-center mb-2.5 lg:mb-7.5 text-gray">
        Don't have an account yet?{" "}
        <span
          className={signup_for_free_style}
          onClick={() => set_is_login_page(false)}
        >
          Sign Up For Free
        </span>
      </p>

      {/* ===== Form Body ===== */}
      <form className={form_style} onSubmit={handleSubmit(onSubmit)}>
        {/* Email or Username input */}
        <FormBox
          type={"text-input"}
          input_name={"Username Or Email"}
          input_placeholder={"Enter Your Username Or Email"}
          props={register("email_username")}
          error_message={errors.email_username?.message}
        />

        {/* Password input */}
        <FormBox
          type={"password-input"}
          input_name={"Password"}
          input_name_style={"text-dark"}
          input_placeholder={"Enter Your Password"}
          props={register("password")}
          error_message={errors.password?.message}
        />

        {/* Remember me + Forget password section */}
        <div className="elements-justify-between gap-5 flex-wrap">
          {/* Remember me checkbox */}
          <FormBox type={"remember-me-input"} input_name={"Remember me"} />

          {/* Toggle forget password view */}
          <button
            onClick={toggle_forget_password}
            className="text-gray underline decoration-gray"
          >
            Forget Password?
          </button>
        </div>

        {/* Submit button */}
        <Master_button type={"submit"} style={"w-full!"}>
          <span>Login</span>
        </Master_button>
      </form>
    </div>
  );
};

// Main container styles
const login_form_style = `
log_in_area min-w-full card-shadow bg-white rouned-[10px] p-[10px] lg:p-[30px] elements-column gap-[20px] 
`;

// Form layout styles
const form_style = `elements-column gap-[20px] relative`;

// Signup link styles
const signup_for_free_style = `text-secondary hover:underline cursor-pointer decoration-secondary`;

export default Login_form;
