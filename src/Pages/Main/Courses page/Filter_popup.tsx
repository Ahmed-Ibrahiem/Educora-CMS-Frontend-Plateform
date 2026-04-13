import { our_teachers_section } from "../../../assets/Assets";

type action = {
  type: "UPDATE_CATEGORY", payload: string
} | {
  type: "UPDATE_PRICE", payload: string
} | {
  type: "UPDATE_RATING", payload: number
} | {
  type: "UPDATE_SKILL", payload: string
} | {
  type: "UPDATE_INSTRUCTOR", payload: string
}

type propsType = {
  updateFilterCourses: () => void,
  dispatchFilter: React.ActionDispatch<[action: action]>,
  is_filter_popup_active: boolean,
  toggle_filter_popup_active: () => void,
}

const Filter_popup = ({
  updateFilterCourses,
  dispatchFilter,
  is_filter_popup_active,
  toggle_filter_popup_active,
}: propsType) => {

  const all_categories = [
    "All",
    "Development",
    "Design",
    "Accounting",
    "Translation",
    "Photography",
    "Writing",
    "Marketing",
  ];
  const instructors = our_teachers_section.teachers;
  const price = ["All", "Free", "Paid"];
  const skill_level = ["All Levels", "Beginner", "Intermediate", "Advanced"];
  const rating = [3, 3.5, 4, 4.5, 5];
  
  return (
    <div
      className={`${popup_className} ${is_filter_popup_active ? "top-0!" : "delay-500!"
        }`}
    >
      <div
        className={`${filter_container} ${is_filter_popup_active ? "h-[590px]! p-[20px] delay-500! " : ""
          }`}
      >
        <div className="filter_options grid grid-cols-2 gap-[20px]">
          {/* Categories Options */}
          <div className="category">
            <h1 className={section_header}>Category</h1>
            <div className="options">
              {all_categories.map((categ, index) => {
                return (
                  <div className={option_className} key={index}>
                    <input
                      className={`our-input-style`}
                      type="radio"
                      name="categories"
                      id={categ}
                      defaultChecked={index == 0 ? true : false}
                      onChange={() => dispatchFilter({ type: "UPDATE_CATEGORY", payload: categ })}
                    />
                    <label className="cursor-pointer" htmlFor={categ}>
                      {categ}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Prices Level Options */}
          <div className="price">
            <h1 className={section_header}>Price Level</h1>
            <div className="options">
              {price.map((pri, index) => {
                return (
                  <div className={option_className} key={index}>
                    <input
                      className="our-input-style"
                      type="radio"
                      name="price"
                      id={`${pri} price`}
                      defaultChecked={index == 0 ? true : false}
                      onChange={() => dispatchFilter({ type: "UPDATE_PRICE", payload: pri })}
                    />
                    <label className="cursor-pointer" htmlFor={`${pri} price`}>
                      {pri}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Skill Level Options */}
          <div className="skill_level">
            <h1 className={section_header}>Skill Level</h1>
            <div className="options">
              {skill_level.map((skill, index) => {
                return (
                  <div className={option_className} key={index}>
                    <input
                      className="our-input-style"
                      type="radio"
                      name="skill"
                      defaultChecked={index == 0 ? true : false}
                      id={`${skill}`}
                      onChange={() => dispatchFilter({ type: "UPDATE_SKILL", payload: skill })}
                    />
                    <label className="cursor-pointer" htmlFor={`${skill}`}>
                      {skill}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Rating Options */}
          <div className="rating">
            <h1 className={section_header}>Ratings</h1>
            <div className="options">
              {rating.map((rating, index) => {
                return (
                  <div className={option_className} key={index}>
                    <input
                      className="our-input-style"
                      type="radio"
                      name="rating"
                      id={`${rating}`}
                      defaultChecked={index == 0 ? true : false}
                      onChange={() => dispatchFilter({ type: "UPDATE_RATING", payload: rating })}
                    />
                    <label
                      className="cursor-pointer elements-row gap-[5px]"
                      htmlFor={`${rating}`}
                    >
                      <i className="fa-solid fa-star text-amber-400 text-[14px]"></i>{" "}
                      {rating}{" "}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Instructors Options */}
          <div className="instructors">
            <h1 className={section_header}>Instructors</h1>
            <div className={options_className}>
              <div className={option_className}>
                <input
                  type="radio"
                  className="our-input-style"
                  name="instructors"
                  id={"all_teachers"}
                  defaultChecked
                  onChange={() => dispatchFilter({ type: "UPDATE_INSTRUCTOR", payload: "All" })}
                />
                <label className="cursor-pointer" htmlFor={"all_teachers"}>
                  All Instructors
                </label>
              </div>
              {instructors.map((teach) => {
                return (
                  <div className={option_className} key={teach.id}>
                    <input
                      className="our-input-style"
                      type="radio"
                      name="instructors"
                      id={teach.teacher_name}
                      onChange={() => dispatchFilter({ type: "UPDATE_INSTRUCTOR", payload: teach.teacher_name })}
                    />
                    <label
                      className="cursor-pointer"
                      htmlFor={teach.teacher_name}
                    >
                      {teach.teacher_name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="actions elements-column gap-[10px]">
            <button type="button" onClick={() => {
              updateFilterCourses()
              toggle_filter_popup_active()
            }} className={`apply ${filter_popup_btn_className}`}>
              <span>Apply</span>
            </button>
            <button
              onClick={toggle_filter_popup_active}
              className={`cancel ${filter_popup_btn_className} bg-primary! hover:bg-secondary!`}
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== Components Style ====================
const popup_className = `
fixed top-[-100%] left-0 w-full h-full bg-[#00000090] z-[1000] text-[16px] elements-center-row
duration-500
`;
const option_className = `elements-row gap-[10px] text-[15px] text-dark`;
const filter_container =
  "filter_container w-[400px] max-w-[95%] bg-white rounded-[10px] p-[0] h-0 overflow-hidden duration-500!  ";
const options_className = `elements-column gap-[3px] `;
const section_header = `mb-[5px] text-[16px] font-medium`;
const filter_popup_btn_className = `bg-secondary rounded-[10px] text-white font-medium p-[5px_10px]! w-full! hover:bg-primary duration-500!`;
// ==================== Components Style ====================

export default Filter_popup;
