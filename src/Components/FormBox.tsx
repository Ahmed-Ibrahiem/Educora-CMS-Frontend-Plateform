import React, { useRef, useState } from "react";
import Wrong_auth_message from "./UI/Wrong_auth_message";
import type { UseFormRegisterReturn } from "react-hook-form";

type fromPropsType = {
  type?:
    | "email-input"
    | "password-input"
    | "remember-me-input"
    | "accept-terms-input"
    | "text-input";
  input_name?: string;
  input_placeholder?: string;
  input_name_style?: string;
  box_style?: string;
  props?: UseFormRegisterReturn;
  error_message?: string | undefined;
};

const FormBox = ({
  type,
  input_name,
  input_placeholder,
  input_name_style,
  box_style,
  props,
  error_message,
}: fromPropsType) => {
  console.log(props);

  if (type === "text-input") {
    return (
      <>
        <div className={`box ${box_className} ${box_style}`}>
          <span>{input_name}</span>
          <input
            type="text"
            className={input_style}
            placeholder={input_placeholder && input_placeholder}
            {...props}
          />
          {error_message && <Wrong_auth_message message={error_message} />}
        </div>
      </>
    );
  }

  if (type === "email-input") {
    return (
      <>
        <div className={`box ${box_className} ${box_style}`}>
          <span className={input_name_style}>{input_name}</span>
          <input
            type="email"
            className={input_style}
            placeholder={input_placeholder && input_placeholder}
            {...props}
          />
          {error_message && <Wrong_auth_message message={error_message} />}
        </div>
      </>
    );
  }

  if (type === "password-input") {
    const [is_show_pass, set_is_show_pass] = useState(false);
    return (
      <div className={`box ${box_className} ${box_style}`}>
        <span>{input_name}</span>
        <div className="relative  ">
          <input
            type={is_show_pass ? "text" : "password"}
            className={input_style}
            placeholder={input_placeholder}
            {...props}
          />
          <button
            type="button"
            className="text-gray absolute top-[50%] right-[20px] translate-y-[-50%]"
            onClick={() => set_is_show_pass(!is_show_pass)}
          >
            <i
              className={`fa-solid ${
                is_show_pass ? "fa-eye" : "fa-eye-slash"
              }  `}
            ></i>
          </button>
        </div>
        <p className="text-[12px] text-gray">
          Your password must be 8 characters at least
        </p>
        {error_message && <Wrong_auth_message message={error_message} />}
      </div>
    );
  }

  if (type === "remember-me-input" || type === "accept-terms-input") {
    return (
      <div className={`box relative elements-row ${box_style}`}>
        <input
          id={
            type === "remember-me-input"
              ? "remember-me-input"
              : "accept-terms-input"
          }
          type="checkbox"
          className="our_checkbox"
          {...props}
        />
        <label
          htmlFor={
            type === "remember-me-input"
              ? "remember-me-input"
              : "accept-terms-input"
          }
          className={`${input_name_style} cursor-pointer`}
        >
          {input_name}
        </label>
      </div>
    );
  }
};

const box_className = "elements-column gap-[5px] ";
const input_style =
  "p-[12px_18px] border-[1px] border-gray-300 rounded-[5px] text-[14px] w-full";
const text_className = "text-[18px] ";

export default FormBox;
