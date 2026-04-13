import type { Ref } from "react";
import type { FeedbackType } from "../../../../../types/courses.type";
import FeedbackItem from "./FeedbackItem";

type feedbackType<T> = {
  feedback: FeedbackType[];
  gridRef: Ref<HTMLDivElement | null>;
};

const FeedbackGrid = <T,>({ feedback, gridRef }: feedbackType<T>) => {
  return (
    <div
      ref={gridRef}
      className="feedback_grid elements-column gap-[30px] my-[50px]"
    >
      {feedback.map((feed, index) => {
        return <FeedbackItem key={index} feedback={feed} />;
      })}
      <button type="button" className="text-[14px] text-primary underline">
        See All Reviews
      </button>
    </div>
  );
};

export default FeedbackGrid;
