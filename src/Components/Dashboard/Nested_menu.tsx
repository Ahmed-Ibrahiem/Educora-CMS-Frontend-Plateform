import { Link } from "react-router-dom";
type propsType = {
  nested_menu: { title: string, link: string, icon: string }[]
}

const Nested_menu = ({ nested_menu }: propsType) => {
  return (
    <ul className={`${nested_menu_className}`}>
      {nested_menu.map((li, index: number) => {
        return (
          <li key={index} className="hover:bg-secondary-light rounded-[5px]">
            <Link to={`${li.link}`} className="elements-row gap-2.5 p-2">
              <i className={li.icon}></i>
              <p>{li.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const nested_menu_className = `
relative top-0  left-0  bg-white rounded-[5px] z-10 w-[180px] text-dark p-[10px] 
md:absolute! md:left-[calc(100%+20px)]! md:invisible md:opacity-0 md:group-hover:visible md:group-hover:opacity-[1]
md:shadow-[var(--box-shadow)] 
`;
export default Nested_menu;
