import { trending_courses_section } from "../../../../assets/Assets";
import Tranding_course_card from "./Tranding_course_card";
import Section_title from "../../../../Components/UI/Section_title";
import Custom_swiper from "../../../../Components/Custom_swiper";
import { SwiperSlide } from "swiper/react";
import type { cousreCardType } from "../../../../types/courses.type";
import { useCoursesContext } from "../../../../Contexts/CoursesContext";

const Our_tranding_courses = () => {
  const tranding_courses = trending_courses_section;
  const { coursesCards } = useCoursesContext();

  return (
    <div className="our_tranding_area bg-light py-25">
      <div className="container">
        <div className="section_head lg:w-[70%] mx-auto elements-center-column ">
          <Section_title
            desc={trending_courses_section.title.desc}
            highight_word={tranding_courses.title.highlight_word}
            label={tranding_courses.title.label}
            title={tranding_courses.title.main}
            desc_style={"text-center"}
            title_style={"text-center"}
          />
        </div>
        <div className="tranding_courses_grid group/swiper mt-12.5 relative  sm:px-5">
          {/* Swiper navigation prev */}
          <button
            className="swiper-nav-btn prev_nav_btn elements-center-row w-12.5 h-12.5 
           absolute top-[calc(100%+40px)] xl:top-[50%] left-[calc(50%-50px)] translate-x-[-50%]  xl:-left-5 translate-y-[-50%] hover:bg-primary z-10
            rounded-[50%] bg-secondary text-white text-md cursor-pointer opacity-0 group-hover/swiper:opacity-100"
          >
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>

          {/* Start Swiper Sliders */}
          <Custom_swiper
            slidesPerView={3}
            spaceBetween={20}
            speed={300}
            navigation={{
              prevEl: ".prev_nav_btn",
              nextEl: ".next_nav_btn",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1250: { slidesPerView: 3 },
            }}
          >
            {coursesCards.map((course_data: cousreCardType, index) => {
              if (index <= 5)
                return (
                  <SwiperSlide className="h-full">
                    <Tranding_course_card
                      key={course_data.id}
                      course_data={course_data}
                    />
                  </SwiperSlide>
                );
            })}
          </Custom_swiper>
          {/* End Swiper Sliders */}
          {/* Swiper navigation next */}
          <button className={buttonStyle}>
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = `
swiper-nav-btn next_nav_btn elements-center-row w-12.5 h-12.5 z-10
absolute top-[calc(100%+40px)] xl:top-[50%] right-[calc(50%-50px)]  xl:-right-10 translate-y-[-50%] rounded-[50%]
bg-secondary text-white text-md cursor-pointer opacity-0 group-hover/swiper:opacity-100 hover:bg-primary
`;

export default Our_tranding_courses;
