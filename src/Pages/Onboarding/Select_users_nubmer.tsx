import React, { useState, type SetStateAction } from "react";

type propsType = {
  current_progress: string;
  set_current_progress_number: React.Dispatch<SetStateAction<number>>;
};

const Select_users_nubmer = ({
  current_progress,
  set_current_progress_number,
}: propsType) => {
  const choises = [
    "1-10",
    "11-50",
    "51-200",
    "201-500 ",
    "501-1000",
    "1001-5000",
    "5001-10000",
    "10001+",
  ];

  const [users_number_choise, set_users_number_choise] = useState("");

  const toggle_the_users_choise = (users_number: string) => {
    if (users_number_choise == users_number) set_users_number_choise("");
    else set_users_number_choise(users_number);
  };

  return (
    <div
      className={`${users_number_className} ${
        current_progress == "users_number"
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
              onClick={() => toggle_the_users_choise(btn)}
              className={`${choise_className} ${
                users_number_choise == btn
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
          users_number_choise ? "bg-secondary border-secondary text-white" : ""
        }`}
        onClick={() => {
          if (users_number_choise !== "")
            set_current_progress_number((prev) => prev + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

const users_number_className = `elements-column gap-[20px] text-gray duration-500! transition-all! `;
const choise_className = `text-[14px] p-[18px_10px] border-[1px] border-gray-200 rounded-[5px]`;
const next_btn_className = `next bg-gray-100 p-[8px_20px] border-[1px] border-gray-200 w-fit rounded-[5px]`;
const choises_container_className = `choises grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]`;

export default Select_users_nubmer;
