import { Link } from "react-router-dom";
import { useRender_stars_regular } from "../../../../Utils/Componets_utils";


type courseType = {
  id: number | string,
  level: string,
  title: string,
  description:
  string,
  rating: number,
  duration: string,
  lectures: number,
  category: string,
  image: string,
}

const Course_card = ({ course_data }: { course_data: courseType }) => {
  return (
    <div className={card_className}>
      {/* Card Header  (Image , category , course_link) */}
      <div className="card_head relative">
        {/* Course Image */}
        <div className={`${course_image_className}`}>
          <img src={course_data.image} alt="" />
          {/* Course Link */}
          <Link
            to={`/course/${course_data.id}`}
            className={course_link_className}
          >
            <i className="fa-solid fa-link"></i>
          </Link>
        </div>

        {/* Course Category */}
        <div
          className="category p-[7px_10px] main-border-radius bg-secondary text-white w-fit elements-center-row gap-1.25
                        absolute top-5 -right-3.75 text-[14px] card-shadow"
        >
          <i className="fa-regular fa-flag"></i>
          <span className=" ">{course_data.category}</span>
        </div>
      </div>

      {/* Card body (lectures, rating , title , description) */}
      <div className="card_body elements-column gap-3.75">
        <div className="top elements-justify-between text-[17px]">
          <div className="left elements-row gap-1.25 text-gray">
            <i className="fa-solid fa-book text-secondary"></i>
            <p>{course_data.lectures} Lectures </p>
          </div>
          <div className="right elements-row gap-1.25 text-secondary ">
            {useRender_stars_regular(course_data.rating)}
            <p>({course_data.rating})</p>
          </div>
        </div>
        <Link
          to={`/course/${course_data.id}`}
          className="text-[22px] text-dark hover:text-secondary font-bold line-clamp-1"
        >
          {course_data.title}
        </Link>
        <p className="text-gray leading-[1.8] line-clamp-2">
          {course_data.description}
        </p>
      </div>

      {/* Card Footer (level , duration) */}
      <div className="card_foot pt-3.75 border-top-1  elements-justify-between">
        <div className="left elements-row gap-1.25 text-gray">
          <i className="fa-solid fa-clock text-secondary"></i>
          <span>{course_data.duration}</span>
        </div>
        <div className="right p-[5px_10px] bg-secondary text-white main-border-radius">
          <span>{course_data.level}</span>
        </div>
      </div>
    </div>
  );
};

const card_className = `group card-shadow bg-white main-border-radius p-[20px] elements-column gap-[15px] fade-in-animation `;

const course_image_className = `
img_box overflow-hidden max-h-[220px] card-border-radius relative before-sitting elements-center-row
before:bg-dark before:opacity-[0] before:transition-all before:duration-700 group-hover:before:opacity-40
`;

const course_link_className = `
absolute top-[50%] left-[50%] translate-[-50%] w-[60px] h-[60px] rounded-[50%] bg-secondary text-white 
text-[20px] elements-center-row opacity-0 scale-[1.8] group-hover:opacity-100 group-hover:scale-[1] duration-700
hover:bg-white hover:text-secondary transition-all z-5!
`;

export default Course_card;
