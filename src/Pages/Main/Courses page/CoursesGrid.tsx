import Course_card from "../Home/Courses section/Course_card";
import type { cousreCardType } from "../../../types/courses.type";

type props = {
  displayCourses: cousreCardType[]
}

const CoursesGrid = ({ displayCourses }: props) => {

  return (
    <>
      {displayCourses.length > 0 && (
        <div className="grid_area grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] ">
          {displayCourses.map((data) => {
            return <Course_card key={data.id} course_data={data} />;
          })}
        </div>
      )}
    </>
  );
};

export default CoursesGrid;
