import MainImageStyle from "../../../Components/UI/MainImageStyle";
import type { InstructorType } from "../../../types/courses.type";

const Intructor_tab = ({ instructor_info }: { instructor_info: InstructorType }) => {
  return (
    <div
      className={`fade-in-animation`}
    >
      <h1 className={section_title_className}>Instructor</h1>
      <div className="instructor_area_header elements-row gap-[20px] flex-wrap">
        <MainImageStyle
          image={instructor_info.profile_image}
          name={instructor_info.name}
          iStyel={`text-[70px]`}
          imStyle={`w-[150px]! h-[150px]! p-[8px]!`}
        />
        <div className="details elements-column gap-[10px] font-medium  text-gray ">
          {instructor_info.name && (
            <h3 className="text-[18px] font-bold text-dark">
              {instructor_info.name}
            </h3>
          )}
          {instructor_info.role && <p>{instructor_info.role}</p>}
          <div className="elements-row gap-[20px] flex-wrap text-[15px]">
            {instructor_info.rating && (
              <span className="text-amber-400">
                <i className="fa-solid fa-star mr-[5px]"></i>{" "}
                {instructor_info.rating}{" "}
                <span className="text-gray">Instructor rating</span>
              </span>
            )}
            {instructor_info.reviews && (
              <span>
                <i className="fa-solid fa-comment mr-[5px]"></i>{" "}
                {instructor_info.reviews} Reviews
              </span>
            )}
            {instructor_info.students && (
              <span>
                <i className="fa-solid fa-user mr-[5px]"></i>
                {instructor_info.students} Students
              </span>
            )}
            {instructor_info.courses && (
              <span>
                <i className="fa-solid fa-play mr-[5px]"></i>
                {instructor_info.courses} Courses
              </span>
            )}
          </div>
        </div>

        {instructor_info.bio && (
          <div className="bio text-gray leading-relaxed font-medium text-[15px] whitespace-pre-line">
            {instructor_info.bio}
          </div>
        )}
      </div>
    </div>
  );
};
const section_title_className = `text-[20px] mb-[20px] font-bold text-black`;
export default Intructor_tab;
