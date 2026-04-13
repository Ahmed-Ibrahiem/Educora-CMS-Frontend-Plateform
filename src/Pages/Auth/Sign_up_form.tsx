import { useForm } from "react-hook-form";
import FormBox from "../../Components/FormBox";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchemas } from "../../Services/SignupSchemas";
import { useAuthContext } from "../../Contexts/AuthContext";
import Master_button from "../../Components/UI/Master_button";
import { useNavigate } from "react-router-dom";
import React, { useEffect, type SetStateAction } from "react";
import type { userType } from "../../types/auth.type";
import successfullImage from  '/src/assets/check.png'

type propsType = {
  is_login_page: boolean;
  set_is_login_page: React.Dispatch<SetStateAction<boolean>>;
};

const Sing_up_form = ({ is_login_page, set_is_login_page }: propsType) => {
  const navigate = useNavigate();

  const signup_form = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      confirm_password: "",
      accept_terms: false,
    },
    resolver: yupResolver(SignupSchemas),
  });

  const { signup, signup_erros, is_loading, is_authenticated } =
    useAuthContext();

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = signup_form;

  const onSubmit = async (data: userType) => {
    // if the data is healthy then call the signup function "if there is errors go to step ###"
    const user = await signup(data.email, data.username, data.password!);
    // console.log("Submitted Data:", data);
  };

  // ### if the user already exist then show the message error
  useEffect(() => {
    if (signup_erros <= 0) return;

    if (!is_authenticated) {
      setError("email", { message: "the email or username is already exist" });
      setError("username", {
        message: "the email or username is already exist",
      });
    }
  }, [signup_erros]);

  const go_to_next = () => {
    navigate("/onboarding", { replace: true });
  };

  return (
    <div
      className={`${sign_up_style}  ${
        is_login_page ? "absolute left-[100%]" : "relative top-0 left-0"
      }`}
    >
      {/* ===== Loading Overlay ===== */}
      {is_loading && (
        <div className="absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.1)] elements-center-row z-20">
          <p className="text-[18px] text-gray">Loading...</p>
        </div>
      )}

      {/* ===== Success State UI ===== */}
      {is_authenticated && (
        <div className="h-full w-full bg-white elements-center-column gap-[20px] rounded-[5px] absolute top-0 left-0 z-50">
          {/* Success icon */}
          <img
            src={successfullImage}
            className="w-[80px] h-[80px] "
            alt=""
          />

          {/* Success message */}
          <p className="text-[24px] text-dark font-bold">Login Successfully</p>

          {/* Button to return to previous page */}
          <Master_button style={"mt-[50px]"} action={go_to_next}>
            <span>Go To Next</span>
          </Master_button>
        </div>
      )}
      <div className="elements-center-column gap-[5px]">
        <h1 className="text-[30px] text-dark font-bold text-center">Sign Up</h1>
        <p className="text-center mb-[10px]  text-gray">
          Already have an account{" "}
          <span
            className={log_in_style}
            onClick={() => set_is_login_page(true)}
          >
            Log in
          </span>
        </p>
      </div>
      <form
        className={`${form_style} grid grid-cols-2 `}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormBox
          type={"email-input"}
          input_name={"Email Address"}
          input_placeholder={"Enter Your Email Address"}
          props={register("email")}
          error_message={errors.email?.message}
        />
        <FormBox
          type={"text-input"}
          input_name={"Username"}
          input_placeholder={"Enter Your Username"}
          props={register("username")}
          error_message={errors.username?.message}
        />
        <FormBox
          box_style={"col-span-full!"}
          type={"password-input"}
          input_name={"Password"}
          input_name_style={"text-dark"}
          input_placeholder={"Enter Your Password"}
          props={register("password")}
          error_message={errors.password?.message}
        />
        <FormBox
          box_style={"col-span-full!"}
          type={"password-input"}
          input_name={"Confirm Password"}
          input_name_style={"text-dark"}
          input_placeholder={"Confirm Your Password"}
          props={register("confirm_password")}
          error_message={errors.confirm_password?.message}
        />
        <FormBox
          box_style={"col-span-full! w-full!"}
          type={"accept-terms-input"}
          input_name={"Accept the terms and privacy policy"}
          props={register("accept_terms")}
          error_message={errors.accept_terms?.message}
        />
        <Master_button type="submit" style={"w-full! col-span-full!"}>
          <span>Sign Up</span>
        </Master_button>
      </form>
    </div>
  );
};

const sign_up_style = `sign_up_area min-w-full! card-shadow bg-white rouned-[10px] p-[10px] lg:p-[30px] elements-column gap-[20px]`;
const form_style = ` gap-[20px] relative`;
const log_in_style = `text-secondary hover:underline cursor-pointer decoration-secondary`;
export default Sing_up_form;
