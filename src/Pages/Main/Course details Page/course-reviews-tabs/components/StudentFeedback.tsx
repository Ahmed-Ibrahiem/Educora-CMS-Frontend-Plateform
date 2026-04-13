import type { ReviewsType } from "../../../../../types/courses.type";
import { useRender_stars_regular } from "../../../../../Utils/Componets_utils";

const StudentFeedback = ({ reviews }: { reviews: ReviewsType }) => {
  const stars = ["5_stars", "4_stars", "3_stars", "2_stars", "1_star"] as const;

  return (
    <div className="student_feedback w-full flex flex-col md:flex-row gap-7.5 ">
      <div className="left elements-center-column gap-2.5 bg-primary-light p-[30px_80px] rounded-lg ">
        <h1 className="text-5xl font-bold text-black ">
          {reviews.average_rating}
        </h1>
        {useRender_stars_regular(Math.floor(reviews.average_rating))}
        <p className="text-xm text-gray">Course Rating</p>
      </div>
      <ul className="right grow bg-primary-light p-7.5 elements-column gap-3.75  rounded-lg ">
        {stars.map((star, index) => {
          return (
            <li key={index} className="elements-center-row gap-2.5 ">
              <div className="prograss grow h-1.25 bg-[#a9cbc7] relative overflow-hidden rounded-[10px]">
                <span
                  className="bg-primary h-full inline-block absolute rounded-[100px] top-0 left-0"
                  style={{ width: `${reviews.distribution[star]}%` }}
                ></span>
              </div>
              {useRender_stars_regular(5, "text-xm")}
              <p className="w-7.5 text-xm">
                {reviews.distribution[star]}%
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentFeedback;
