import Section_title from "../../../../Components/UI/Section_title";
import { useCoursesContext } from "../../../../Contexts/CoursesContext";
import { courses_sction } from "../../../../assets/Assets";
import Course_card from "./Course_card";

const Courses_section = () => {
  const { coursesCards } = useCoursesContext();
  const courses_data = courses_sction;

  return (
    <div className="py-30 ">
      <div className="container flex flex-col gap-12.5 ">
        <div className="site_head w-[80%] xl:w-[50%] elements-center-column mx-auto">
          <Section_title
            highight_word={courses_data.title.highlight_word}
            label={courses_data.title.label}
            title={courses_data.title.main}
            title_style={"text-center"}
            desc={
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            }
            desc_style={"text-center"}
          />
        </div>
        <div className="courses_grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coursesCards.length > 0 &&
            coursesCards.map((courses, index) => {
              if (index <= 5)
                return <Course_card key={courses.id} course_data={courses} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Courses_section;
