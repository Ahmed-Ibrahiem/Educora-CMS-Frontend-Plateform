import type React from "react";
import { useAuthContext } from "../../Contexts/AuthContext";
import Master_link from "../UI/Master_link";

type props = {
  set_is_profile_menu_open: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthControl = ({ set_is_profile_menu_open }: props) => {
  const { is_authenticated } = useAuthContext();

  const toggle_profile_menu_state = () => {
    set_is_profile_menu_open((prev) => !prev);
  };

  return (
    <div className="lg:block ">
      {is_authenticated ? (
        <div
          className={` profile_ ${profile_style} group-[profile]:`}
          onClick={toggle_profile_menu_state}
        >
          <i className="fa-solid fa-user text-[16px] lg:text-[20px] text-white"></i>
        </div>
      ) : (
        <Master_link link={"/register_page"}>
          <i className="fa-solid fa-pencil relative z-2"></i>{" "}
          <span className="relative z-2 hidden md:block">Register Now</span>
        </Master_link>
      )}
    </div>
  );
};

const profile_style = `
w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] elements-center-row rounded-[8px] bg-secondary cursor-pointer 
`;

export default AuthControl;
