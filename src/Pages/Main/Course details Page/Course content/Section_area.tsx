import { useEffect, useState } from "react";
import Lecture_area from "./Lecture_area";
import type { SectionType } from "../../../../types/courses.type";

type propsType = { section_data: SectionType, is_extend_all: boolean }

const Section_area = ({ section_data, is_extend_all }: propsType) => {
  const [is_extand, set_is_extand] = useState(false);

  useEffect(() => {
    if (is_extend_all) set_is_extand(true);
    else set_is_extand(false);
  }, [is_extend_all]);

  return (
    <div className="section_area rounded-[5px] overflow-hidden border-[1px] border-gray-200 ">
      <div
        className={section_header_className}
        onClick={() => set_is_extand(!is_extand)}
      >
        <div className="left elements-row gap-[10px] text-dark font-medium ">
          <i
            className={`fa-solid fa-angle-left ${is_extand ? "rotate-[-90deg]" : ""
              }`}
          ></i>
          <h3>{section_data.title}</h3>
        </div>
        <div className="right elements-row gap-[20px]  text-gray-400">
          <span className={elipse_style}>
            {section_data.lectures_count} Lecture
          </span>
          <span>{section_data.totalDuration} min</span>
        </div>
      </div>
      <ul
        className={`elements-column gap-[20px] p-[10px_20px] overflow-hidden text-[14px]! ${is_extand ? "max-h-[610px]" : "max-h-0 py-0!"
          }`}
      >
        {section_data.lectures.map((lecture, index) => {
          return <Lecture_area key={index} lecture={lecture} />;
        })}
      </ul>
    </div>
  );
};

const section_header_className = `
section_header elements-justify-between p-[10px_20px] bg-primary-light flex-wrap gap-[10px]
  cursor-pointer
`;
const elipse_style = `
before-sitting relative before:w-[6px]! before:h-[6px]! before:bg-gray-400 before:top-[50%]!
before:left-[calc(100%+10px)]! before:translate-[-50%]! before:rounded-[50%]! 
`;

export default Section_area;
