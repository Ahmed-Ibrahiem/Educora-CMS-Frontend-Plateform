import { useState } from "react";
import Overview_course from "./Overview Course/Overview_course";
import Course_content from "./Course content/Course_content";
import Intructor_tab from "./Intructor_tab";
import Course_info_area from "./Course Info/Course_info_area";
import { useNavigate, useParams } from "react-router-dom";
import ReviewTab from "./course-reviews-tabs/ReviewTab";
import Course_tabs_componenet from "./Course_tabs_componenet";
import { useCoursesContext } from "../../../Contexts/CoursesContext";

const Course_details_page = () => {
  // const [course, set_course] = useState<CourseType | null>(null);
  const [current_tab, set_current_tab] = useState<string>("overview");
  const { coursesData } = useCoursesContext();
  const { course_id } = useParams<string>();

  const navigate = useNavigate();

  const course = coursesData?.find((data) => data.id === course_id);

  if (!course) {
    navigate("/Error404");
  }

  if (course)
    return (
      <div>
        <>
          <div className={course_info_area}>
            <div className="container ">
              {/* Course Info */}
              <Course_info_area course={course} course_path={course.path} />
            </div>
          </div>
          {/* Course Tabs */}
          <div className="course_details_area container my-12.5 mt-2.5!">
            <div className="course_details_area_area lg:w-[60%]">
              {/* Course details tabs buttons */}
              <Course_tabs_componenet
                current_tab={current_tab}
                set_current_tab={set_current_tab}
              />
              {/* Course details content */}
              <div className="Course_details_content">
                {current_tab === "overview" && (
                  <Overview_course
                    data={{
                      description: course.description,
                      what_you_will_learn: course.what_you_will_learn,
                      requirements: course.requirements,
                    }}
                  />
                )}
                {current_tab === "course content" && (
                  <Course_content data={course.course_content} />
                )}
                {current_tab === "instructor" && (
                  <Intructor_tab instructor_info={course.instructor} />
                )}
                {current_tab === "reviews" && (
                  <ReviewTab reviews_data={course.reviews} />
                )}
              </div>
            </div>
          </div>
        </>
        )
      </div>
    );
};

// ================================ components style ================================
const course_info_area = `
course_info_area  before-sitting relative before:bg-[url(/src/assets/shap.png)]
before:z-0 before:opacity-[0.1] bg-img-format bg-slider-bg2 lg:p-[40px] p-[10px] py-[40px]!
`;
// ================================ components style ================================

export default Course_details_page;
