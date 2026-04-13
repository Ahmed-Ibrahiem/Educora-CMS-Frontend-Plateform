import { useState } from "react";
import Login_form from "./Login_form";
import Sing_up_form from "./Sign_up_form";
import Logo from "../../Components/UI/Logo";
import Forget_password from "./Forget_password";
import auth_img from "/src/assets/slider-1.jpg";

const Authentication_page = () => {
  const [is_login_page, set_is_login_page] = useState(true);
  const [is_forget_password, set_is_forget_password] = useState(false);
  const toggle_forget_password = () => {
    set_is_forget_password(!is_forget_password);
  };
  return (
    <div className={authentication_page_style}>
      {/* Left Part */}
      <div className={left_style}>
        <div className={img_box_style}>
          <img src={auth_img} className={img_style} alt="" />
        </div>
        <div className={text_content_style}>
          <Logo text_style={"text-white"} />
          <h1 className={text_content_h1_style}>
            Welcome to our largest community
          </h1>
          <p className={text_content_p_style}>
            Let's learn something new today!
          </p>
        </div>
      </div>
      {/* Left Part */}
      {/* Right Part */}
      <div className={`${right_style} `}>
        <div
          className={` ${authentication_content_className} ${
            is_forget_password
              ? "hide-auth-popup-animate"
              : "show-auth-popup-animate"
          } `}
        >
          <Login_form
            toggle_forget_password={toggle_forget_password}
            is_login_page={is_login_page}
            set_is_login_page={set_is_login_page}
          />
          <Sing_up_form
            is_login_page={is_login_page}
            set_is_login_page={set_is_login_page}
          />
        </div>
        <Forget_password
          is_forget_password={is_forget_password}
          toggle_forget_password={toggle_forget_password}
        />
      </div>
      {/* Right Part */}
    </div>
  );
};

// ===================================== Components Style =====================================

const authentication_page_style = `flex flex-col lg:flex-row w-[100%] min-h-[100vh]`;
const left_style = `w-full lg:w-[50%] lg:h-[100vh] relative before-sitting before:bg-black before:opacity-[0.5] relative z-[100]`;
const img_box_style = `w-full! h-[100%]!   `;
const img_style = `w-full h-full min-h-[400px]  object-cover`;
const text_content_style = `absolute top-[40px] left-[50%] translate-x-[-50%] w-[95%] elements-center-column gap-[10px] text-center`;
const text_content_h1_style = `text-[30px] lg:text-[40px] text-white font-bold leading-[1.2] `;
const text_content_p_style = `text-[16px] lg:text-[18px] text-gray-300`;
// Right Style
const right_style = `
elements-column w-full lg:w-[50%] overflow-y-clip  h-fit lg:h-[100vh] gap-[50px]
grow relative overflow-x-hidden 
`;
const authentication_content_className = `
authentication_content w-full h-full elements-center-row overflow-hidden py-[50px]
px-[20px] md:px-[50px] lg:px-[50px]
`;

// ===================================== Components Style =====================================

export default Authentication_page;
