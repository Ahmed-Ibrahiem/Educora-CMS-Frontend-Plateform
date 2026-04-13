import Section_title from "../../../../Components/UI/Section_title";
import { our_teachers_section } from "../../../../assets/Assets";
import Teacher_card from "./Teacher_card";

const Our_teachers_section = () => {
  const our_teachers = our_teachers_section;
  return (
    <div>
      <div className="container">
        <div className="section_head w-[80%] lg:w-[60%] elements-center-column mx-auto ">
          <Section_title
            label={our_teachers.title.label}
            title={our_teachers.title.main}
            highight_word={our_teachers.title.highlight_word}
            title_style={"text-center"}
            desc={our_teachers.description}
            desc_style={"text-center"}
          />
        </div>
        <div className="teachers_grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12.5">
          {our_teachers.teachers.map((teacher) => {
            return <Teacher_card key={teacher.id} teacher_data={teacher} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Our_teachers_section;
