import Master_button from "../../../../Components/UI/Master_link.js";
import Section_title from "../../../../Components/UI/Section_title.js";
import { Format_highlighted_title } from "../../../../Utils/Componets_utils.js";

type propsType = {
  hero_data: {
    id: number;
    welcome_text: string;
    main_title: string;
    highlight_word: string;
    description: string;
    buttons: {
      text: string;
      url: string;
      style: string;
    }[];
    background_image: string;
    background_alt: string;
  };
  is_current_slide: boolean;
};

const Hero_single = ({ hero_data, is_current_slide }: propsType) => {
  return (
    <div className="hero_single h-125 md:h-175 elements-center-row  overflow-hidden relative before:bg-slider-bg before:content-[''] before:z-5 before:absolute before:top-0 before:left-0 before:w-full before:h-full">
      <img
        src={hero_data.background_image}
        alt={hero_data.background_alt}
        className=" h-[150%]! w-full! object-cover absolute top-[50%] left-[50%] translate-[-50%] "
      />
      <div className="content relative container elements-center-column md:items-start! gap-5 z-10 text-center md:text-start">
        <div className={`${is_current_slide ? "animate_from_top" : ""}`}>
          <Section_title highight_word="" label={"WELCOME TO EDUCORA"} />
        </div>
        <h1
          className={`text-white text-[30px] md:text-xxl lg:text-[65px] font-extrabold leading-[1.1] w-full lg:w-[60%] ${
            is_current_slide ? "animate_from_right" : ""
          }`}
        >
          {Format_highlighted_title(
            hero_data.highlight_word,
            hero_data.main_title,
          )}
        </h1>
        <p
          className={`text-white leading-6.25 md:leading-7.5 text-[14px] md:text-md w-full lg:w-[60%] ${
            is_current_slide ? "animate_from_left" : ""
          }`}
        >
          {hero_data.description}
        </p>
        <div
          className={`actions w-fit elements-center-row gap-5 ${
            is_current_slide ? "animate_from_bottom" : ""
          }`}
        >
          <Master_button>
            <span className="relative z-2">ABOUT MORE</span>
            <i className="fa-solid fa-arrow-right relative z-2"></i>
          </Master_button>
          <Master_button style={"bg-white! text-black! hover:text-white!"}>
            <span className="relative z-2">ABOUT MORE</span>
            <i className="fa-solid fa-arrow-right relative z-2"></i>
          </Master_button>
        </div>
      </div>
    </div>
  );
};

export default Hero_single;
