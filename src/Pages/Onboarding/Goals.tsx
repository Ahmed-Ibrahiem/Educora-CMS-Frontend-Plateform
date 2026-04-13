import React, { useState, type SetStateAction } from "react";

type propsType = {
  current_progress: string;
  set_current_progress_number: React.Dispatch<SetStateAction<number>>;
};

const Goals = ({
  current_progress,
  set_current_progress_number,
}: propsType) => {
  const choises = [
    "Train employees",
    "Train Customers",
    "Train parthers",
    "Provide training sevices ",
    "Sell courses",
    "Teach Students",
    "Other",
  ];

  const goToNext = (): void => {
    set_current_progress_number((prev) => prev + 1);
  };

  const [the_goals, set_the_goals] = useState<string[]>([]);

  const toggle_the_goals = (goal: string) => {
    if (the_goals.includes(goal))
      set_the_goals((prev) => prev.filter((go) => go !== goal));
    else set_the_goals([...the_goals, goal]);
  };

  return (
    <div
      className={`${Goals_className} ${
        current_progress == "goals"
          ? "scale-[1] opacity-[1] relative top-0 left-0 visible"
          : "opacity-0 scale-[0.5] absolute top-[50%] left-[50%] translate-[-50%] invisible"
      }`}
    >
      <h3 className="text-[18px] text-black">
        What are your three main goals With Educora?
      </h3>
      <p>
        Select goals based on your priority, with the first choice being top
        priority
      </p>
      <div className={choises_container_className}>
        {choises.map((btn, index) => {
          return (
            <button
              onClick={() => toggle_the_goals(btn)}
              className={`${choise_className} ${
                the_goals.includes(btn)
                  ? "bg-secondary-light border-secondary-light"
                  : ""
              }`}
              key={index}
            >
              {btn}
            </button>
          );
        })}
      </div>
      <button
        className={`${next_btn_className} ${
          the_goals.length !== 0
            ? "bg-secondary border-secondary text-white"
            : ""
        }`}
        onClick={() => {
          if (the_goals.length !== 0) goToNext();
        }}
      >
        Next
      </button>
    </div>
  );
};

const Goals_className = `elements-column gap-[20px] text-gray duration-500! transition-all! min-w-[90%] `;
const choise_className = `text-[14px] p-[18px_10px] border-[1px] border-gray-200 rounded-[5px]`;
const next_btn_className = `next bg-gray-100 p-[8px_20px] border-[1px] border-gray-200 w-fit rounded-[5px]`;
const choises_container_className = `choises grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]`;

export default Goals;
