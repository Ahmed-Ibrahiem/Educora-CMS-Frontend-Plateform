import Custom_swiper from "../../../../Components/Custom_swiper";
import Hero_single from "./Hero_single.jsx";
import { useState } from "react";
import { hero_slides } from "../../../../assets/Assets.js";
import { SwiperSlide } from "swiper/react";
import type { Swiper as swiperType } from 'swiper'

const Hero_section = () => {
  const [current_slide, set_current_slide] = useState(0);

  return (
    <div className="hero_section_area">
      <Custom_swiper
        onSlideChange={(swiper: swiperType) => set_current_slide(swiper.realIndex)}
        navigation
      >
        <>
          {hero_slides.map((slide_data, index) => {
            return (
              <SwiperSlide key={slide_data.id}>
                <Hero_single
                  hero_data={slide_data}
                  is_current_slide={current_slide === index}
                />
              </SwiperSlide>
            );
          })}
        </>
      </Custom_swiper>
    </div>
  );
};

export default Hero_section;
