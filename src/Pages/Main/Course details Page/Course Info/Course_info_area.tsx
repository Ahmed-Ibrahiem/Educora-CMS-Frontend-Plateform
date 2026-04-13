import { Link } from "react-router-dom";
import Badges from "../Badges";
import {
  format_page_path_to_link,
  format_page_path_to_render,
} from "../../../../Utils/Componets_utils";
import type { CourseType } from "../../../../types/courses.type";
import MainImageStyle from "../../../../Components/UI/MainImageStyle";

type propsType = {
  course: CourseType;
  course_path: string;
};

const Course_info_area = ({ course, course_path }: propsType) => {
  const page_path = format_page_path_to_render(course_path);
  return (
    <div className={course_info_content_className}>
      <div className="page_path elements-row gap-[30px] ">
        {page_path.map((path, index) => {
          return (
            <Link
              className={`${path_link_className} before-sitting relative ${
                index < page_path.length - 1 && path_link_elipse
              }`}
              key={index}
              to={`/${format_page_path_to_link(path)}`}
            >
              {path}
            </Link>
          );
        })}
      </div>
      <Badges data={course.course_info.badges} />
      {/* course info title */}
      <div className={`${course_title_className}`}>
        {course.course_info.title}
      </div>
      {/* course info description */}
      <div className={course_desc_className}>
        {course.course_info.description}
      </div>
      <div className="elements-row gap-[20px] flex-wrap">
        <span className="text-amber-400">
          {course.course_info.rating} <i className="fa-solid fa-star "></i>{" "}
          <span className="text-gray">
            ({course.course_info.reviews_count})
          </span>
        </span>
        <div className="text-gray elements-row gap-[10px]">
          <i className="fa-solid fa-user"></i>
          <span>
            {course.course_info.students_enrolled} enrolled in this course
          </span>
        </div>
        <div className="text-gray elements-row gap-[10px] ">
          <i className="fa-solid fa-clock"></i>
          <span>{course.course_info.last_updated}</span>
        </div>
      </div>

      <div className="elements-row gap-[10px] text-white">
        <MainImageStyle
          image={course.instructor.profile_image}
          name={course.instructor.name}
          imStyle={`w-[55px]! h-[55px]! p-[5px]!`}
          iStyel={`text-[20px]`}
        />
        <span>{course.course_info.instructor_name}</span>
      </div>
    </div>
  );
};

const course_info_content_className = `
course_info_content relative z-[2] lg:w-[60%] elements-column gap-[20px]
`;

const path_link_className = `
text-white capitalize text-[12px] md:text-[18px] font-medium hover:text-secondary mb-[50px]`;

const path_link_elipse = `
before:w-[7px]! before:h-[7px]! before:bg-secondary before:rounded-[50%]
before:right-[-18px]! before:left-auto! before:top-[50%]! before:translate-y-[-50%]!
`;

const course_title_className = `title text-[20px] sm:text-[30px] lg:text-[40px] text-white leading-[1.4] font-medium`;

const course_desc_className = `text-gray leading-[1.5]`;

export default Course_info_area;
