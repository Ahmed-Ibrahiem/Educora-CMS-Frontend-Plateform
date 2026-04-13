import Testimonial_card from "./Testimonial_card";
import Custom_swiper from "../../../../Components/Custom_swiper";
import Section_title from "../../../../Components/UI/Section_title";
import { testimonials } from "../../../../assets/Assets";
import { SwiperSlide } from "swiper/react";
const Testimonials_section = () => {
  return (
    <div
      className="Testimonials_area py-25 relative before-sitting bg-footer  before:bg-[url(/src/assets/shap.png)]
     before:bg-no-repeat before:bg-center before:bg-cover before:opacity-[0.1] "
    >
      <div className="container flex items-center flex-col xl:flex-row  gap-5 relative z-2! ">
        <div className="left w-full xl:w-[48%] order-2 xl:order-1 ">
          <Custom_swiper
            slidesPerView={2}
            breakpoints={{
              320: { slidesPerView: 1 },
              720: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1200: { slidesPerView: 2 },
            }}
            spaceBetween={20}
            style={{ padding: "40px 10px" }}
            pagination={{ clickable: true, dynamicBullets: true }}
          >
            {testimonials.map((testimonial, index) => {
              if (index <= 5)
                return (
                  <SwiperSlide key={testimonial.id}>
                    <Testimonial_card testimoial_data={testimonial} />
                  </SwiperSlide>
                );
            })}
          </Custom_swiper>
        </div>
        <div className="right w-full  xl:w-[48%] text-white items-center xl:items-start elements-column gap-2.5 order-1 xl:order-2">
          <Section_title
            label={"Testimonials "}
            title={"Some Valuable Feedback From Our Students"}
            title_style={"leading-[1] text-white text-center xl:text-start"}
            highight_word={"Feedback"}
            desc={
              "Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how."
            }
            desc_style={"text-gray-400  text-center xl:text-start"}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials_section;
