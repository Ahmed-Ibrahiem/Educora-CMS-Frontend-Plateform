import type { SetStateAction } from "react";
import type React from "react";

type propsType = {
  current_tab: string,
  set_current_tab: React.Dispatch<SetStateAction<string>>
}
const Course_tabs_componenet = ({ current_tab, set_current_tab }: propsType) => {
  const tabs = ["overview", "course content", "instructor", "reviews"];

  return (
    <div className="course_tabs_area elements-row gap-[20px] mb-[40px] text-dark border-b-[3px] border-b-gray-200">
      {tabs.map((tab, index) => {
        return (
          <button
            key={index}
            onClick={() => set_current_tab(tab)}
            className={` ${course_tab_btn_className} ${current_tab === tab && current_active_tab_className
              }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

const course_tab_btn_className = `
py-[15px] before-sitting before:h-[2px]! before:top-auto! before:bottom-[-2px]! capitalize
before:bg-transparet! relative before:duration-300 text-[12px] md:text-[16px] font-medium`;
const current_active_tab_className = ` before:bg-secondary! `;

export default Course_tabs_componenet;
