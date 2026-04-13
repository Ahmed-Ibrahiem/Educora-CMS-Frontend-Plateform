import { useState } from "react";

type dataType = {
  description: {
    short_text: string,
    long_text: string
  },
  what_you_will_learn: string[],
  requirements: string[],
}

const Overview_course = ({ data }: { data: dataType }) => {
  const [see_more_description, set_see_more_description] = useState(false);
  const toggle_see_more_descripiton = () => {
    set_see_more_description(!see_more_description);
  };

  return (
    <div
      className={`overview_tabs elements-column gap-[30px] fade-in-animation`}
    >
      <div className="description_area ">
        <h1 className={section_title_className}>Description</h1>
        <div
          className={`${description_content_className} ${see_more_description ? "max-h-[700px]" : "max-h-[120px]"
            }`}
        >
          <h1>{data.description.short_text}</h1>
          <p>{data.description.long_text}</p>
        </div>
        <button
          onClick={toggle_see_more_descripiton}
          className="mt-[20px] text-secondary underline decoration-secondary"
        >
          See More
        </button>
      </div>
      <div className="will_learn_area">
        <h1 className={section_title_className}>What You Will Learn</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px] text-gray text-[15px]">
          {data.what_you_will_learn.map((point, index) => {
            return (
              <li
                key={index}
                className="elements-row items-start! gap-[5px] hover:text-dark!"
              >
                {" "}
                <i className="fa-regular fa-check-circle text-primary mt-[3px]"></i>{" "}
                <p>{point}</p>{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="requirements_area">
        <h1 className={section_title_className}>Requirements</h1>
        <ul className="elements-column gap-[10px]">
          {data.requirements.map((point, index) => {
            return (
              <li key={index} className="elements-row items-start!  gap-[5px]">
                <i className="fa-regular fa-circle-dot mt-[5px] text-primary"></i>
                <p className="text-gray hover:text-black">{point}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const description_content_className = `
description_content whitespace-pre-line text-justify leading-relaxed elements-column gap-[20px]
text-gray transition-all duration-500! overflow-hidden`;

const section_title_className = `text-[20px] mb-[20px] font-bold text-black`;
export default Overview_course;
