import { Link } from "react-router-dom";
import type { cousreCardType } from "../../../../types/courses.type";

const Tranding_course_card = ({
  course_data,
}: {
  course_data: cousreCardType;
}) => {
  return (
    <div className=" group bg-white  main-border-radius p-[20px] h-[100%] ">
      {/* card head */}
      <div className="card_top mb-[15px] relative">
        <div
          className="img_box overflow-hidden h-[220px] max-h-[220px] card-border-radius relative before-sitting elements-center-row
         before:bg-dark before:opacity-[0] before:transition-all before:duration-700 group-hover:before:opacity-40"
        >
          <img
            src={course_data.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <Link
            to={""}
            className="absolute top-[50%] left-[50%] translate-[-50%] w-[60px] h-[60px] rounded-[50%] bg-secondary text-white 
          text-[20px] elements-center-row z-20 opacity-0 scale-[1.8] group-hover:opacity-100 group-hover:scale-[1] duration-700
          hover:bg-white hover:text-secondary transition-all cursor-pointer! "
          >
            <i className="fa-solid fa-link"></i>
          </Link>
        </div>
        {course_data.badges.best_seller && (
          <div className="bestSeller p-[7px_10px] main-border-radius bg-secondary text-white font-medium absolute top-[30px] right-[-20px] ">
            Best Seller
          </div>
        )}
      </div>
      {/* card body */}
      <div className="card_body elements-column gap-3.75 text-[13px] sm:text-[14px]">
        <div className="top elements-justify-between gap-5 flex-wrap  text-white">
          <div className="p-[5px_10px] bg-secondary rounded-[5px] ">
            {course_data.level}
          </div>
          <div className="p-[5px_10px] bg-secondary rounded-[5px]">
            {course_data.category}
          </div>
        </div>
        <Link
          to={""}
          className="text-[16px] sm:text-[20px] text-dark hover:text-secondary font-extrabold line-clamp-1"
        >
          {course_data.title}
        </Link>
        <p className="text-gray line-clamp-2 leading-[1.6] text-[13px] sm:text-[15px]">
          {course_data.description}
        </p>
        <div className="elements-justify-between gap-5 flex-wrap">
          <div className="left elements-row gap-1.25 text-secondary">
            <p>{course_data.rating}</p>
            <i className="fa-solid fa-star"></i>
            <span className="text-gray">({course_data.reviews_count})</span>
          </div>
          <div className="right text-gray font-medium ">
            <p>
              <span className="text-primary">{course_data.totalEnrolled}</span>{" "}
              Students
            </p>
          </div>
        </div>
        <div className="elements-justify-between gap-5 flex-wrap">
          <div className="left text-gray elements-row gap-1.25">
            <i className="fa-solid fa-clock text-secondary"></i>
            <span>{course_data.duration}</span>
          </div>
          <div className="right text-gray elements-row gap-1.25">
            <i className="fa-solid fa-book text-secondary"></i>
            <span>{course_data.lectures}</span>
          </div>
        </div>
      </div>
      {/* card footer */}
      <div className="card_bottom text-[14px] border-top-1 pt-3.75 mt-3.75 gap-5 elements-justify-between flex-wrap">
        <Link
          to={`/teacher/${course_data.instructor.id}`}
          className="left cursor-pointer text-gray text-[14px] elements-row gap-1.25"
        >
          <div className="img_box w-10 h-10 rounded-[50%] overflow-hidden">
            <img
              src={course_data.instructor.image}
              alt=""
              className="w-full h-full object-cover card-shadow"
            />
          </div>
          <p className="line-clamp-1 max-w-[90px] sm:max-w-none">
            {course_data.instructor.name}
          </p>
        </Link>
        <div className="right">
          <button
            className="text-white text-[16px]! font-medium bg-secondary main-border-radius 
          w-[90px] h-[36px] cursor-pointer relative master-button-effect elements-center-row overflow-hidden relative elements-center-row group/addCart "
          >
            <span className=" min-w-full z-10 relative left-0 group-hover/addCart:absolute group-hover/addCart:-left-full text-center">
              {!course_data.price ? "Free" : course_data.price} $
            </span>
            <span className=" min-w-full z-10 absolute left-full group-hover/addCart:relative group-hover/addCart:left-0 text-center ">
              Add Card
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tranding_course_card;
