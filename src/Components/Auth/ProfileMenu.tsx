import { Link } from "react-router-dom";
import { useAuthContext } from "../../Contexts/AuthContext";
import type React from "react";

type propsType = {
  is_menu_open: boolean
  , set_is_profile_menu_open: React.Dispatch<React.SetStateAction<boolean>>

}

const PorfileMenu = ({ is_menu_open, set_is_profile_menu_open }: propsType) => {


  

  const profile_menu = [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon: "fa-regular fa-compass",
    },
    {
      title: "My Profile",
      to: "/profile-page",
      icon: "fa-regular fa-circle-user",
    },
  ];

  const { logout } = useAuthContext();

  return (
    <>
      {is_menu_open && (
        <ul className={`${ul_style}`}>
          {profile_menu.map((ele, ind) => {
            return (
              <li key={ind}>
                <Link
                  className="elements-row gap-[10px] p-[5px] hover:bg-gray-200 w-full"
                  to={ele.to}
                >
                  <i className={ele.icon}></i>
                  <span>{ele.title}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => {
                set_is_profile_menu_open(false);
                logout();
              }}
              type="button"
              className="elements-row gap-[10px] p-[5px] hover:bg-gray-200 w-full"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <span>Log Out</span>
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

const ul_style = `
w-[200px] p-[10px] elements-column gap-[5px] absolute right-0 top-[calc(100%+25px)]
bg-white rounded-[5px] z-30 shadow-[0_0_5px_rgba(0,0,0,0.1)] fade-in-animation
`;

export default PorfileMenu;
