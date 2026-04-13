import { useEffect, useRef, useState } from "react";
import Logo from "../../UI/Logo";
import Navbar_menu from "./Navbar_menu";
import Responsive_nav_menu from "./Responsive_nav_menu";
import { use_out_side_click } from "../../../Utils/Componets_utils";
import AuthControl from "../../Auth/AuthControl";
import PorfileMenu from "../../Auth/ProfileMenu";

type propsType = {
  open_search_popup: () => void;
};

const Header = ({ open_search_popup }: propsType) => {
  const [header_stick, set_header_stick] = useState(false);
  const [is_res_nav_menu_open, set_is_res_nav_menu_open] = useState(false);
  const [is_profile_menu_open, set_is_profile_menu_open] = useState(false);

  const toggle_res_nav_menu_state = () => {
    set_is_res_nav_menu_open(!is_res_nav_menu_open);
  };
  const headerRef = useRef<HTMLElement | null>(null);

  const close_res_nav = () => {
    set_is_res_nav_menu_open(false);
  };

  use_out_side_click(headerRef, close_res_nav);

  /* Adjust the header_stick By changing the state of the header_stick variable,
     and based on it the change is made in the header classes */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        set_header_stick(true);
      } else {
        set_header_stick(false);
      }
    });
  }, []);

  return (
    <div className={`${header_stick ? "h-25" : ""}`}>
      <header
        ref={headerRef}
        className={`w-full py-2.5! z-1000 bg-white duration-200 header-shadow
             ${header_stick ? "fixed top-0 left-0 fade-in-animation" : ""}`}
      >
        <div className="container elements-justify-between relative">
          {/* header logo */}
          <Logo />

          {/* navbar navigation menu */}
          <nav className=" text-md text-dark font-bold hidden lg:flex gap-12.5">
            <ul className="elements-center-row gap-10">
              <Navbar_menu />
            </ul>
          </nav>

          {/* right navbar (search button , apply now button)*/}
          <div className="right_nav elements-center-row gap-3.75 sm:gap-7.5 relative">
            <button
              className="cursor-pointer text-[20px]"
              onClick={() => {
                open_search_popup();
                close_res_nav();
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            {/* Auth Control */}
            <AuthControl set_is_profile_menu_open={set_is_profile_menu_open} />
            <PorfileMenu
              is_menu_open={is_profile_menu_open}
              set_is_profile_menu_open={set_is_profile_menu_open}
            />

            <button
              onClick={toggle_res_nav_menu_state}
              className="responsive_menu_btn cursor-pointer text-[25px] lg:hidden"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* Responsive navbar navigation menu */}
          <Responsive_nav_menu
            is_res_nav_menu_open={is_res_nav_menu_open}
            toggle_res_nav_menu_state={toggle_res_nav_menu_state}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
