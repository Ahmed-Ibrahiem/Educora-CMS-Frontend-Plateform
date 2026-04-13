import Goals from "./Goals";
import Logo from "../../Components/UI/Logo";
import { useEffect, useState } from "react";
import Select_users_nubmer from "./Select_users_nubmer";
import About_you from "./About_you";

const Onboarding = () => {
  const progress_name = ["goals", "users_number", "about_you"] as const;
  const [current_progress_number, set_current_progress_number] =
    useState<number>(0);
  const [current_progress, set_current_progress] = useState<string>(
    progress_name[current_progress_number]!,
  );

  useEffect(() => {
    set_current_progress(progress_name[current_progress_number]!);
  }, [current_progress_number]);

  return (
    <div className={onboard_page_style}>
      <div className={left_style}>
        <div className={img_box_style}>
          <img src="/assets/slider-1.jpg" className={img_style} alt="" />
        </div>
        <div className={text_content_style}>
          <Logo text_style={"text-white"} />
          <h1 className={text_content_h1_style}>Welcome Aboard Ahmed</h1>
          <p className={text_content_p_style}>Let's get to know you better</p>
        </div>
      </div>
      <div className={right_style}>
        <div className={`${progress_par} `}>
          {Array(3)
            .fill(0)
            .map((_, index) => {
              return (
                <span
                  key={index}
                  className={`grow h-full rounded-[30px] bg-gray-300 ${
                    index <= current_progress_number ? "bg-secondary" : ""
                  }`}
                ></span>
              );
            })}
        </div>
        <div className="relative overflow-hidden">
          <Goals
            current_progress={current_progress}
            set_current_progress_number={set_current_progress_number}
          />
          <Select_users_nubmer
            current_progress={current_progress}
            set_current_progress_number={set_current_progress_number}
          />
          <About_you current_progress={current_progress} />
        </div>
      </div>
    </div>
  );
};

// ======================== Components Style ==========================
const onboard_page_style = `flex flex-col lg:flex-row w-[100%] min-h-[100vh]`;
// ---------------------------- Left part -----------------------------
const left_style = `w-full lg:w-[50%] lg:h-[100vh] relative before-sitting before:bg-black before:opacity-[0.5] relative z-[100]`;
const img_box_style = `w-full! h-[100%]!   `;
const img_style = `w-full h-full min-h-[400px]  object-cover`;
const text_content_style = `absolute top-[40px] left-[50%] translate-x-[-50%] w-[95%] elements-center-column gap-[10px] text-center`;
const text_content_h1_style = `text-[30px] lg:text-[40px] text-white font-bold leading-[1.2] `;
const text_content_p_style = `text-[16px] lg:text-[18px] text-gray-300`;
// ---------------------------- Left part -----------------------------

// ---------------------------- right part ----------------------------
const right_style = ` w-full lg:w-[50%] overflow-y-clip  h-fit lg:h-[100vh] gap-[50px]
grow relative overflow-x-hidden relative elements-column py-[50px] px-[20px]
`;

const progress_par = `progress_par w-full h-[8px] elements-row gap-[5px] mb-[50px]`;
// ---------------------------- right part ----------------------------
// ======================== Components Style ==========================
export default Onboarding;
