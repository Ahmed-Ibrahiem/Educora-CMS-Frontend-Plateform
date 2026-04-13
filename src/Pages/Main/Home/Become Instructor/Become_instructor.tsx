import Master_link from "../../../../Components/UI/Master_link";
import { Format_highlighted_title } from "../../../../Utils/Componets_utils";

const Become_instructor = () => {
  return (
    <div className="become_instructor_area py-[100px]">
      <div className="container bg-light card-shadow group relative rounded-[10px] overflow-hidden ">
        <div
          className="shap_one w-[120px] h-[120px] absolute top-[-80px] right-[-80px] rounded-[50%]  duration-500!
        border-[15px] border-secondary opacity-10 group-hover:opacity-100 group-hover:right-[-60px] group-hover:top-[-60px]"
        ></div>
        <div className="shap_two w-[120px] h-[120px] absolute top-[20px] left-[50px] rounded-[50%] bg-primary-light z-[-1] "></div>
        <div className="shap_three w-[40px] h-[40px] absolute top-[40px] left-[200px] rounded-[50%] bg-primary-light z-[-1] "></div>
        <div className="content p-[40px] elements-justify-between flex-col lg:flex-row gap-[20px]">
          <div className="left lg:w-[70%]">
            <div className="text">
              <h2 className="text-dark text-[30px] font-bold text-center lg:text-start">
                {Format_highlighted_title(
                  "Instructor!",
                  "Become an Instructor!",
                )}
              </h2>
              <p className="text-gray leading-[1.8] text-center lg:text-start ">
                Speedily say has suitable disposal add boy. On forth doubt miles
                of child. Exercise joy man children rejoiced. Yet uncommonly his
                ten who diminution astonished.
              </p>
            </div>
          </div>
          <div className="right">
            <Master_link>
              <i className="fa-solid fa-chalkboard-user z-[2]"></i>
              <span className="z-[2]">Start Teaching Today</span>
            </Master_link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become_instructor;
