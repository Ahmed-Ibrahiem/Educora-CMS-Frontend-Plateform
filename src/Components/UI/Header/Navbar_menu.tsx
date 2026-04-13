import { Link } from "react-router-dom";



const Navbar_menu = ({ links_style }: { links_style?: string }) => {
  const menus = ["Home", "Courses", "About", "Contact"];

  return (
    <>
      {menus.map((menu, ind) => {
        return (
          <Link key={ind} to={menu.toLocaleLowerCase()}>
            <li className={`hover:text-primary duration-100 ${links_style}`}>
              <span>{menu}</span>
            </li>
          </Link>
        );
      })}
    </>
  );
};

export default Navbar_menu;
