import { useState } from "react";
import { useRender_stars_regular } from "../../../../../Utils/Componets_utils";
import type { FeedbackType } from "../../../../../types/courses.type";

// FeedbackItem component receives a single feedback object as a prop
const FeedbackItem = ({ feedback }: { feedback: FeedbackType }) => {

  // State to track if image loading failed
  const [is_error, set_is_error] = useState<boolean>(false);

  // State to store user's response (yes / no)
  const [is_helpufl, set_is_helpful] = useState<string>("");

  // State to check if user has already interacted with helpful buttons
  const [is_feedback_active, set_is_feedback_active] = useState<boolean>(false);

  return (
    <div className="elements-column md:flex-row! gap-5 pb-10 border-b border-border-color">

      {/* User Image or Fallback Initial */}
      <div className="user_image min-w-15! w-15 h-15! rounded-[50%] bg-primary elements-center-row">
        {feedback.feedback_image && !is_error ? (
          <img
            src={feedback.feedback_image}
            onError={() => set_is_error(true)} // If image fails, switch to fallback
            alt={`${feedback.name} image`}
          />
        ) : (
          // Fallback: show first letter of user's name
          <p className="text-[20px] text-white font-bold capitalize">
            {feedback.name.slice(0, 1)}
          </p>
        )}
      </div>

      {/* Feedback Content */}
      <div className="feedback_info elements-column gap-1.25">

        {/* User Name and Time */}
        <div className="elements-row gap-1.25 text-[14px]">
          <h2 className="text-dark font-bold">{feedback.name}</h2>
          <p className="text-gray ">{feedback.time_ago}</p>
        </div>

        {/* Render Stars if rating exists */}
        {
          useRender_stars_regular(
            Math.floor(feedback.rating!), // Round down rating
            "text-[12px]"
          )}

        {/* Feedback Title with fallback */}
        <h3 className="text-[14px] font-bold">
          {feedback.title ? feedback.title : "The Best"}
        </h3>

        {/* Feedback Comment */}
        <p className="text-[14px] text-gray">{feedback.comment}</p>

        {/* Actions Section */}
        <div className="action">

          {/* Show buttons only if user hasn't interacted yet */}
          {!is_feedback_active && (
            <div className="elements-row gap-2.5 text-[14px] mt-5">
              <p>was this feedback is helpful?</p>

              {/* Yes Button */}
              <button
                type="button"
                onClick={() => {
                  set_is_helpful("yes"); // Save response
                  set_is_feedback_active(true); // Disable further interaction
                }}
                className="p-[3px_10px] rounded-[5px] border-primary border text-white bg-primary "
              >
                yes
              </button>

              {/* No Button */}
              <button
                type="button"
                onClick={() => {
                  set_is_helpful("no"); // Save response
                  set_is_feedback_active(true); // Disable further interaction
                }}
                className="p-[3px_10px] rounded-[5px] border-primary border  text-gray "
              >
                no
              </button>
            </div>
          )}

          {/* Show "Helpful" with thumbs up if user selected YES */}
          {is_feedback_active && is_helpufl === "yes" && (
            <div className="elements-row gap-1.5 text-[14px] text-primary font-bold">
              <span className="">Helpful</span>{" "}
              <i className="fa-solid fa-thumbs-up"></i>
            </div>
          )}

          {/* Show "Helpful" with thumbs down if user selected NO */}
          {is_feedback_active && is_helpufl === "no" && (
            <div className="elements-row gap-1.5 text-[14px] text-gray font-bold">
              <span className="">Helpful</span>{" "}
              <i className="fa-solid fa-thumbs-down"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;