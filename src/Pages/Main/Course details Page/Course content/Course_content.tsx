import { useState } from "react";
import Section_area from "./Section_area";
import type { CourseContent } from "../../../../types/courses.type";

const Course_content = ({ data } : {data: CourseContent}) => {
  const [is_extend_all, set_is_extend_all] = useState(false);

  return (
    <div className={`course_content fade-in-animation`}>
      <h1 className={section_title_className}>Course Content</h1>
      <div className="sections_area">
        {/* Section_header */}
        <div className="section_head elements-justify-between">
          <div className="left elements-row gap-[20px] text-gray text-[14px]">
            <span className={elipse_style}>
              {data.summary.total_sections} Section
            </span>
            <span>{data.summary.total_lectures} Lecture</span>
          </div>
          <button
            className={extand_all_className}
            onClick={() => set_is_extend_all(!is_extend_all)}
          >
            {is_extend_all ? "Close All" : "Extand All"}
          </button>
        </div>
        {/* Sections Content */}
        <div className="sections_content elements-column gap-[20px] mt-[5px] ">
          {data.sections.map((section, index) => {
            return (
              <Section_area
                key={index}
                section_data={section}
                is_extend_all={is_extend_all}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const section_title_className = `text-[20px] mb-[20px] font-bold text-black`;
const elipse_style = `
before-sitting relative before:w-[6px]! before:h-[6px]! before:bg-gray before:top-[50%]!
before:left-[calc(100%+10px)]! before:translate-[-50%]! before:rounded-[50%]!
`;
const extand_all_className = `extend_all text-secondary underline decoration-secondary`;

export default Course_content;
