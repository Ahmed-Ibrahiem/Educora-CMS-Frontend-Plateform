import Navbar_menu from "./Navbar_menu";

type propsType = {
  is_res_nav_menu_open: boolean,
  toggle_res_nav_menu_state: () => void,
}

const Responsive_nav_menu = ({
  is_res_nav_menu_open,
  toggle_res_nav_menu_state,
}: propsType) => {
  return (
    <div
      className={`${div_className} ${is_res_nav_menu_open
        ? "visible open-menu-style1"
        : "invisible close-menu-style1"
        }`}
    >
      <ul className="elements-column" onClick={toggle_res_nav_menu_state}>
        <Navbar_menu
          links_style={`p-[10px_20px] border-b-[1px] border-b-gray-200`}
        />
      </ul>
    </div>
  );
};

const div_className = `responsive_nav_menu lg:hidden absolute top-[100%] left-0 w-full bg-white z-[100]`;
export default Responsive_nav_menu;
