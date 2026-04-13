import React, { useState, type RefObject, type SetStateAction } from "react";
import {
  useRelativeTime,
  useRender_stars_regular,
} from "../../../../../Utils/Componets_utils";
import { useAuthContext } from "../../../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import type { FeedbackType } from "../../../../../types/courses.type";

type props = {
  setFeedbacks: React.Dispatch<SetStateAction<FeedbackType[]>>;
  setHasUserCommented: React.Dispatch<SetStateAction<boolean>>;
  gridRef: RefObject<HTMLDivElement | null>;
};

const FeedbackForm = ({
  setFeedbacks,
  setHasUserCommented,
  gridRef,
}: props) => {
  const [title, set_title] = useState<string>("");
  const [comment, set_comment] = useState<string>("");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handle_title = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_title(e.target.value);
  };

  const handle_comment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    set_comment(e.target.value);
  };

  const add_comment = (data: FeedbackType): void => {
    setFeedbacks((prev) => [data, ...prev]);
  };

  const date = useRelativeTime(new Date());

  const handle_click = () => {
    if (user) {
      const data: FeedbackType = {
        title,
        name: user?.username,
        comment,
        time_ago: date,
        rating: 0,
      };

      if (!data.name || !data.comment) return;

      add_comment(data);

      if (gridRef.current)
        window.scrollTo({ top: gridRef.current.offsetTop + 400 , behavior: "smooth" });

      setHasUserCommented(true);
    } else {
      navigate("/login", {
        state: { from: location.pathname },
      });
    }
  };

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      className="elements-column gap-5"
    >
      <h2 className="text-[16px] font-bold">Write a Review</h2>
      <div>
        <p className="text-[14px] font-bold mb-1.25">
          White is it like to course
        </p>
        {useRender_stars_regular(5, "text-[12px]")}
      </div>
      <div className="form_box elements-column gap-1.5">
        <label htmlFor="review_title" className="text-[14px]">
          Review Title
        </label>
        <input
          value={title}
          onChange={(e) => handle_title(e)}
          type="text"
          className="border-2 border-border-color p-2.5 text-[14px] text-gray rounded-[5px]"
          id="review_title"
        />
      </div>
      <div className="form_box elements-column gap-2.5">
        <label htmlFor="review_title" className="text-[14px]">
          Review Title
        </label>
        <textarea
          value={comment}
          className="border-2 border-border-color p-2.5 text-[14px] h-50 text-gray rounded-[5px]"
          id="review_title"
          onChange={(e) => handle_comment(e)}
        />
      </div>
      <button
        onClick={handle_click}
        type="submit"
        className="text-[14px] text-white p-[10px_32px] bg-primary rounded-[5px] w-fit"
      >
        Submit review
      </button>
    </form>
  );
};

export default FeedbackForm;
