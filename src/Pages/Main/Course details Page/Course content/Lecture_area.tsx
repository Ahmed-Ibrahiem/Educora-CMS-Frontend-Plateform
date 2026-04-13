import type { LectureType } from "../../../../types/courses.type";
import Lecture_icons from "./Lecture_icons";

const Lecture_area = ({ lecture }: { lecture: LectureType }) => {
  return (
    <li className="elements-justify-between gap-[20px] flex-wrap">
      <div className="left elements-row gap-[10px] cursor-pointer">
        <Lecture_icons type={lecture.icon} />
        <h3 className={lecture_title_className}>
          {lecture.title}
        </h3>
      </div>
      <div className="right elements-row gap-[10px]  underline">
        {lecture.preview && (
          <button className="text-primary underline decoration-primary!">
            Preview
          </button>
        )}
        {lecture.questions && <span>{lecture.questions} questions</span>}
        <span className="text-gray">{lecture.duration} min</span>
      </div>
    </li>
  );
};

const lecture_title_className = `
text-gray  line-clamp-1 underline decoration-transparent
hover:decoration-dark hover:text-dark duration-400! 
`

export default Lecture_area;
