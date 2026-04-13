import { useState } from "react";

const Select_menu = ({ select_options }: {select_options: string[]}) => {
  const [is_menu_open, set_is_menu_open] = useState(false);
  const [current_option, set_current_option] = useState(select_options[0]);
  return (
    <div
      className={select_className}
      onClick={() => set_is_menu_open(!is_menu_open)}
    >
      <p>{current_option}</p>
      <i
        className={`fa-solid fa-angle-right ${is_menu_open ? "rotate-90" : ""
          }`}
      ></i>
      <ul
        className={`${options_className}  ${is_menu_open
            ? "visible! opacity-100! translate-y-0!"
            : "invisible opacity-0 -translate-y-25"
          }`}
      >
        {select_options.map((option, index) => {
          return (
            <li
              key={index}
              className={option_className}
              onClick={() => set_current_option(option)}
            >
              <i
                className="fa-solid fa-dollar-sign opacity-0 group-hover:opacity-100
                            transition-all duration-500! "
              ></i>
              <span className={`-ml-3.75 group-hover:ml-0 duration-500!`}>
                {option}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// =============================== Components Style ===============================
const select_className = ` text-[14px] md:text-[16px]
select elements-justify-between gap-[10px] cursor-pointer lg:font-medium
relative p-[5px_10px] border-[1px] border-gray-300 rounded-[5px] w-[140px] lg:w-[160px]
bg-secondary text-white  `;

const options_className = `
options bg-white text-dark 
elements-column absolute w-full top-full card-shadow left-0 z-[100]`;

const option_className = `option group elements-row gap-[5px] lg:font-medium
hover:text-secondary p-[10px] border-b-[1px] border-[#eeeeee3b] transition-all
duration-500
`;
// =============================== Components Style ===============================

export default Select_menu;
