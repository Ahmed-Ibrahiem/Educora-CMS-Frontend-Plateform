import { Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type React from "react";


type propsType = {
  children: React.ReactNode,
  onSlideChange?: (swiper: SwiperType) => void,
  // navigation?: boolean,
  navigation?: boolean | {
    prevEl: ".prev_nav_btn",
    nextEl: ".next_nav_btn",
  },
  slidesPerView?: number,
  breakpoints?: {
    320?: { slidesPerView: number },
    720?: { slidesPerView: number },
    768?: { slidesPerView: number },
    1024?: { slidesPerView: number },
    1200?: { slidesPerView: number },
    1250?: { slidesPerView: number },
  },
  spaceBetween?: number,
  style?: { padding: string },
  pagination?: { clickable: boolean, dynamicBullets: boolean }
  speed?: number
}

const Custom_swiper = ({ children, ...props }: propsType) => {

  return (
    <Swiper
      className="cursor-grab active:cursor-grabbing"
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}


      {...props}
    >
      {children}
    </Swiper>
  );
};

export default Custom_swiper;
