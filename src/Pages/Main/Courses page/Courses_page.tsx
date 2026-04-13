import React, {
  act,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import Pagination_buttons from "../../../Components/Pagination_buttons";
import Section_title from "../../../Components/UI/Section_title";
import Page_header from "../../../Components/Layout/Page_header";
import Filter_popup from "./Filter_popup";
import CoursesGrid from "./CoursesGrid";
import type { cousreCardType } from "../../../types/courses.type";
import { useCoursesContext } from "../../../Contexts/CoursesContext";

// Define the shape of filter options state
type optionType = {
  category: string;
  priceLevel: string;
  rating: number;
  skillLevel: string;
  instructor: string;
};

// Define all possible reducer actions with strict typing
type action =
  | { type: "UPDATE_CATEGORY"; payload: string }
  | { type: "UPDATE_PRICE"; payload: string }
  | { type: "UPDATE_RATING"; payload: number }
  | { type: "UPDATE_SKILL"; payload: string }
  | { type: "UPDATE_INSTRUCTOR"; payload: string };

// Courses_page component: handles filtering, pagination, and displaying courses
const Courses_page = () => {
  // Options for sorting (currently not used)
  const select_options = [
    "Most Viewed",
    "Most Popular",
    "Recently Search",
    "Top Rated",
  ];

  // Get all courses from global context
  const { coursesCards } = useCoursesContext();

  // Store filtered courses after applying filter logic
  const [filterCourses, setFilterCourses] = useState<cousreCardType[]>([]);

  // Reducer to manage filter options state
  const reducerFilter = (state: optionType, action: action) => {
    switch (action.type) {
      // Update category filter
      case "UPDATE_CATEGORY":
        return { ...state, category: action.payload };

      // Update price filter
      case "UPDATE_PRICE":
        return { ...state, priceLevel: action.payload };

      // Update rating filter
      case "UPDATE_RATING":
        return { ...state, rating: action.payload };

      // Update skill level filter
      case "UPDATE_SKILL":
        return { ...state, skillLevel: action.payload };

      // Update instructor filter
      case "UPDATE_INSTRUCTOR":
        return { ...state, instructor: action.payload };

      default:
        return state;
    }
  };

  // Initialize filter options using useReducer
  const [filterOptions, dispatchFilter] = useReducer(reducerFilter, {
    category: "All",
    priceLevel: "All",
    rating: 5,
    skillLevel: "All",
    instructor: "All",
  });

  // Control filter popup visibility
  const [is_filter_popup_active, set_is_filter_popup_active] = useState(false);

  // Store courses currently displayed in the grid
  const [displayCourses, setDisplayCourses] = useState<cousreCardType[]>([]);

  // Control slicing range (pagination logic)
  const [displayInfo, setDisplayInfo] = useState<{
    start: number;
    end: number;
  }>({ start: 0, end: 6 });

  // Current page index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Ref for scrolling to grid when pagination changes
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Function to check if a course matches all active filters
  const filterProcess = (data: cousreCardType) => {
    let valid = true;

    // Filter by category
    if (
      filterOptions.category !== "All" &&
      data.category.toLowerCase() !== filterOptions.category.toLowerCase()
    ) {
      valid = false;
    }

    // Filter by instructor
    if (
      filterOptions.instructor !== "All" &&
      data.instructor.name.toLowerCase() !==
        filterOptions.instructor.toLowerCase()
    ) {
      valid = false;
    }

    // Filter by skill level
    if (
      filterOptions.skillLevel !== "All" &&
      data.level.toLowerCase() !== filterOptions.skillLevel.toLowerCase()
    ) {
      valid = false;
    }

    // Filter by rating (minimum rating logic)
    if (filterOptions.rating < data.rating) {
      valid = false;
    }

    // Filter by price level (Free / Paid)
    if (filterOptions.priceLevel !== "All") {
      if (filterOptions.priceLevel === "Free" && data.price > 0) {
        valid = false;
      } else if (filterOptions.priceLevel === "Paid" && data.price <= 0) {
        valid = false;
      }
    }

    return valid;
  };

  // Apply filtering to all courses
  const updateFilterCourses = () => {
    const finalyCourses = [...coursesCards].filter((data) =>
      filterProcess(data),
    );
    setCurrentIndex(0);
    setFilterCourses(finalyCourses);
  };

  // Run filtering once when courses are loaded
  useEffect(() => {
    if (coursesCards.length > 0) updateFilterCourses();
  }, [coursesCards]);

  // Calculate total number of pages (6 courses per page)
  const numberOfPackages: number = useMemo(() => {
    if (filterCourses.length <= 0) return 0;
    return Math.ceil(filterCourses.length / 6);
  }, [filterCourses]);

  // Update displayed courses based on pagination slice
  useEffect(() => {
    if (filterCourses.length <= 0) setDisplayCourses([]);

    const courses = [...filterCourses].slice(
      displayInfo.start,
      displayInfo.end,
    );
    setDisplayCourses(courses);
  }, [filterCourses, displayInfo.start, displayInfo.end]);

  // Update slice range when page changes
  useEffect(() => {
    const start = currentIndex * 6;
    const end = start + 6;
    setDisplayInfo({ start, end });
  }, [currentIndex]);

  // Toggle filter popup visibility
  const toggle_filter_popup_active = () => {
    set_is_filter_popup_active(!is_filter_popup_active);
  };

  return (
    <div>
      {/* Filter popup for selecting filter options */}
      <Filter_popup
        updateFilterCourses={updateFilterCourses}
        dispatchFilter={dispatchFilter}
        is_filter_popup_active={is_filter_popup_active}
        toggle_filter_popup_active={toggle_filter_popup_active}
      />

      {/* Page header */}
      <Page_header page_name={"Our Courses"} />

      <div className="container py-25!">
        {/* Section title */}
        <div className="section_header w-full lg:w-[50%] mx-auto elements-center-column">
          <Section_title
            label_style={""}
            desc_style={"text-center!"}
            title_style={"text-center"}
            label={"Our Courses"}
            title={"Let's Check Our Courses"}
            highight_word={"Courses"}
            desc={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
          />
        </div>

        {/* Courses grid container */}
        <div className="courses_grid " ref={gridRef}>
          {/* Header section */}
          <div className={section_grid_header}>
            <p className="text-dark lg:font-medium text-[16px] lg:text-md ">
              Showing{" "}
              <span className="text-primary font-bold">
                {coursesCards.length}{" "}
              </span>
              total result
            </p>

            {/* Filter button */}
            <div className="filter elements-row flex-wrap gap-5">
              <button
                onClick={toggle_filter_popup_active}
                className={`${filter_btn_className} master-button-effect relative overflow-hidden`}
              >
                <img
                  src="/src/assets/filter_icon.png"
                  className="w-3.75 lg:w-4.5 z-2"
                  alt=""
                />
                <p className="z-2">Filter</p>
              </button>
            </div>
          </div>

          {/* Render courses */}
          <CoursesGrid displayCourses={displayCourses} />

          {/* Pagination */}
          <Pagination_buttons
            ref={gridRef.current}
            numberOfPackages={numberOfPackages}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
    </div>
  );
};

// Filter button styles
const filter_btn_className = `
filter_popup_btn lg:font-medium elements-center-row gap-[10px] text-white p-[5px_10px]
bg-secondary rounded-[5px] 
`;

// Grid header styles
const section_grid_header = `courses_grid_header my-[40px] elements-justify-between gap-[20px] flex-wrap`;

export default Courses_page;
