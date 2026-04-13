import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About_you = ({ current_progress }: { current_progress: string }) => {
  const industry_options = [
    "Education & Training",
    "Information Technology (IT)",
    "Healthcare & Medical",
    "Finance & Banking",
    "Manufacturing",
    "Retail & E-commerce",
    "Marketing & Advertising",
    "Construction & Real Estate",
    "Hospitality & Tourism",
    "Transportation & Logistics",
    "Government & Public Sector",
    "Non-profit & NGOs",
    "Media & Entertainment",
    "Energy & Utilities",
    "Telecommunications",
    "Human Resources",
    "Consulting Services",
    "Legal & Law",
    "Agriculture",
    "Other",
  ];

  const department_options = [
    "Human Resources (HR)",
    "Sales",
    "Marketing",
    "Customer Support",
    "Product Management",
    "Operations",
    "Research & Development (R&D)",
    "Finance",
    "IT / Technical",
    "Design & UX",
    "Training & Development",
    "Quality Assurance (QA)",
    "Administration",
    "Engineering",
    "Logistics",
    "Legal Affairs",
    "Security",
    "Procurement",
    "Project Management",
    "Other",
  ];

  type optionType = {
    department: string,
    industry: string,
  }

  const [current_options, set_current_options] = useState<optionType>({
    department: "select...",
    industry: "select...",
  });

  const [is_progress_complete, set_is_progress_complete] = useState<boolean>(false);

  type stateType = {
    department: boolean,
    industry: boolean,
  }

  const [menu_state, set_menu_state] = useState<stateType>({
    department: false,
    industry: false,
  });

  const toggel_department_menu_state = (): void => {
    set_menu_state({ ...menu_state, department: !menu_state.department });
  };

  const toggel_industry_menu_state = (): void => {
    set_menu_state({ ...menu_state, industry: !menu_state.industry });
  };

  useEffect(() => {
    if (
      current_options.department == "select..." ||
      current_options.industry == "select..."
    )
      set_is_progress_complete(false);
    else set_is_progress_complete(true);
  }, [current_options]);

  return (
    <div
      className={`${about_you_className} ${current_progress == "about_you"
        ? "scale-[1] opacity-[1] relative top-0 left-0 visible"
        : "opacity-0 scale-[0.5] absolute top-[50%] left-[50%] translate-[-50%] invisible"
        }`}
    >
      <h3 className="text-[18px] text-black">
        Tell us about you and your company
      </h3>
      <div className={choises_container_className}>
        <div className="industry">
          <p className={`${title_selection_className}`}>
            What's your industry?
          </p>
          <div
            className={`${select_className}`}
            onClick={toggel_industry_menu_state}
          >
            <span className="current_option">{current_options.industry}</span>
            <i className="fa-solid fa-angle-down"></i>
            <div
              className={`${options_className} ${menu_state.industry ? "open-menu-style1" : "close-menu-style1"
                } z-[5]`}
            >
              {industry_options.map((option, index) => {
                return (
                  <span
                    onClick={() =>
                      set_current_options({
                        ...current_options,
                        industry: option,
                      })
                    }
                    className={`${option_className}`}
                    key={index}
                  >
                    {option}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="department">
          <p className={`${title_selection_className}`}>
            What's your department?
          </p>
          <div
            className={`${select_className} `}
            onClick={toggel_department_menu_state}
          >
            <span className="current_option">{current_options.department}</span>
            <i className="fa-solid fa-angle-down"></i>
            <div
              className={`${options_className} ${menu_state.department ? "open-menu-style1" : "close-menu-style1"
                }`}
            >
              {department_options.map((option, index) => {
                return (
                  <span
                    onClick={() =>
                      set_current_options({
                        ...current_options,
                        department: option,
                      })
                    }
                    className={`${option_className}`}
                    key={index}
                  >
                    {option}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Link to={is_progress_complete ? '/onboarding_complete' : ""}
        className={`${next_btn_className} ${is_progress_complete ? "bg-secondary border-secondary text-white" : ""
          }`}
      >
        Let's Start
      </Link>
    </div>
  );
};

const about_you_className = `elements-column gap-[20px] text-gray duration-500! transition-all! min-w-[90%] h-[500px] `;
const title_selection_className = `font-medium text-dark mb-[10px]`;
const option_className =
  "line-clamp-1 p-[5px_10px] hover:bg-gray-100 cursor-pointer";
const next_btn_className = `next bg-gray-100 p-[8px_20px] border-[1px] border-gray-200 w-fit rounded-[5px]
mt-[10px]`;
const choises_container_className = `choises grid grid-cols-1 lg:grid-cols-2 gap-[20px]`;
const options_className = `options absolute top-full left-0 w-full bg-white card-shadow rounded-[5px] 
max-h-[175px] overflow-hidden border-gray-100 border-[1px] overflow-y-scroll
`;
const select_className = `select relative border-[1px] border-gray-100 rounded-[5px]
p-[5px_10px] bg-gray-100 elements-justify-between cursor-pointer`;
export default About_you;
