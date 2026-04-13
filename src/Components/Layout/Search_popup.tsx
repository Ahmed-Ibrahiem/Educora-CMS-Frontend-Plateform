import React, { useEffect, useMemo, useState } from "react";
import type { CourseType } from "../../types/courses.type";
import { useNavigate } from "react-router-dom";
import { useCoursesContext } from "../../Contexts/CoursesContext";

// Props type for controlling popup visibility and closing action
type propsType = {
  is_popup_active: boolean;
  close_search_popup: () => void;
};

const Search_popup = ({ is_popup_active, close_search_popup }: propsType) => {
  // Get courses data from context
  const { coursesData } = useCoursesContext();

  // State to store the search input value
  const [searchWord, setSearchWord] = useState<string>("");

  // React Router navigation hook
  const navigate = useNavigate();

  // Prevent default form submission behavior
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  // Memoized filtering logic to avoid unnecessary recalculations
  const filterCourses: CourseType[] = useMemo(() => {
    // If no data or empty search, return empty array
    if (!coursesData || searchWord.trim() === "") return [];

    // Normalize search word (trim + lowercase)
    const word = searchWord.trim().toLowerCase();

    // Filter courses by title match
    const courses = coursesData.filter((data) =>
      data.course_info.title.toLowerCase().includes(word),
    );

    // Safety check (though filter always returns array)
    if (courses === undefined) return [];

    return courses;
  }, [searchWord, coursesData]);

  // Handle clicking on a course result
  const handleCourseBtnClick = (id: number | string): void => {
    navigate(`/course/${id}`); // Navigate to course page
    setSearchWord(""); // Clear search input
    close_search_popup(); // Close popup
  };

  return (
    <div
      className={` ${Search_popup_className}
         ${is_popup_active ? "top-0" : "delay-700!"}`}
      // Close popup when clicking outside the content
      onClick={(e) => e.target == e.currentTarget && close_search_popup}
    >
      <form
        onSubmit={handleSubmit}
        className="form max-w-full! p-5 elements-center-column relative "
      >
        {/* Exit button */}
        <button
          className={`
          ${exit_btn_className}
          ${
            is_popup_active
              ? "-top-37.5! lg:-top-50! opacity-100 delay-700!"
              : ""
          }`}
          onClick={close_search_popup}
        >
          <i className="fa-solid fa-xmark text-[25px] "></i>
        </button>

        {/* Search box */}
        <div
          className={`${search_box_className}
          ${
            is_popup_active
              ? "w-150 p-1.25 opacity-100 delay-600!"
              : "delay-200!"
          }`}
        >
          <input
            type="text"
            placeholder="Search any thing"
            className="grow px-2.5"
            value={searchWord}
            // Update search state on typing
            onChange={(e): void => setSearchWord(e.target.value)}
          />

          {/* Search button */}
          <button type="submit" className={search_btn_className}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Display filtered courses results */}
        {filterCourses.length > 0 && is_popup_active && (
          <div className="display_courses_container bg-white absolute w-[calc(100%-40px)] left-5 top-[calc(100%-10px)] rounded-[5px] overflow-hidden">
            <ul className=" p-2.5 elements-column max-h-62.5 overflow-auto">
              {filterCourses.map((data) => {
                return (
                  <li key={data.id} className="elements-row">
                    <button
                      type="button"
                      onClick={() => handleCourseBtnClick(data.id)}
                      className="p-1.5 text-[14px] cursor-pointer text-start text-gray hover:bg-gray-light hover:text-dark w-full!"
                    >
                      {data.course_info.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

// Main popup container styles
const Search_popup_className = `
fixed w-full h-full bg-[var(--bg-popups)] left-0 z-1000 elements-center-row 
-top-full transition-all! duration-700!
`;

// Exit button styles
const exit_btn_className = `
exit_btn w-15 h-15 rounded-[50%] bg-secondary text-white elements-center-row top-0 opacity-0
cursor-pointer hover:bg-white hover:text-secondary absolute left-[50%] translate-x-[-50%]
transition-all! duration-500!
`;

// Search box styles
const search_box_className = `
search_box max-w-full! bg-white rounded-[10px] relative elements-row gap-[10px] lg:text-[18px] 
w-0 overflow-hidden transition-all! duration-500!
`;

// Search button styles
const search_btn_className = `
w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] rounded-[10px] bg-secondary text-white elements-center-row
`;

export default Search_popup;
