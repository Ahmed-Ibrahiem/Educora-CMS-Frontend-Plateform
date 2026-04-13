import StudentFeedback from "./components/StudentFeedback";
import FeedbackGrid from "./components/FeedbackGrid";
import FeedbackForm from "./components/FeedbackForm";
import type { ReviewsType } from "../../../../types/courses.type";
import { useRef, useState } from "react";

const ReviewTab = ({ reviews_data }: { reviews_data: ReviewsType }) => {
  const [feedbacks, setFeedbacks] = useState(reviews_data.feedback);
  const [hasUserCommented, setHasUserCommented] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fade-in-animation">
      <StudentFeedback reviews={reviews_data} />
      <FeedbackGrid feedback={feedbacks} gridRef={gridRef} />
      {!hasUserCommented ? (
        <FeedbackForm
          setFeedbacks={setFeedbacks}
          setHasUserCommented={setHasUserCommented}
          gridRef={gridRef}
        />
      ) : (
        <p className="text-center text-2xl text-gray font-bold">Thanks You For Your Comment</p>
      )}
    </div>
  );
};

export default ReviewTab;
