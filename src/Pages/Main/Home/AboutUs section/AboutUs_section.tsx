import { about_us_section_data, Assets } from "../../../../assets/Assets";
import Icon_container from "../../../../Components/UI/Icon_container";
import MainImageStyle from "../../../../Components/UI/MainImageStyle";
import Master_button from "../../../../Components/UI/Master_button";
import Section_title from "../../../../Components/UI/Section_title";

const AboutUs_section = () => {
  return (
    <div className="py-30">
      <div className="container grid lg:grid-cols-2 gap-5 ">
        {/* Start Right Elemets */}
        <div className="left flex flex-col sm:flex-row gap-7.5 ">
          <div className="one grow w-full sm:w-[47%] flex flex-col gap-5">
            <div className="grow-3 img-border-radius overflow-hidden">
              <img
                src={Assets.aboutUs_1}
                className=" min-h-full object-cover"
                alt=""
              />
            </div>
            <div className="w-full p-3.75 main-border-radius elements-justify-between bg-secondary">
              <div className="img_box w-25 h-25 rounded-[50%] elements-center-row bg-white">
                <img src={Assets.aboutUs_4} className="w-17.5 h-17.5 " alt="" />
              </div>
              <b className="text-white w-[50%] ">30 Years Of Quality Service</b>
            </div>
          </div>
          {/* Column two */}
          <div className="one grow-2 w-full sm:w-[47%] flex flex-col gap-5">
            <div className=" elements-center-row">
              <MainImageStyle
                image={Assets.aboutUs_2}
                iStyel={"text-[70px]"}
                name="about us image 2"
              />
            </div>
            <div className="grow-2 img-border-radius-reverse overflow-hidden relative">
              <img
                src={Assets.aboutUs_3}
                className="absolute w-full h-full top-[50%] left-[50%] translate-[-50%] object-cover "
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Start Right Elemets */}
        <div className="right flex flex-col gap-5">
          <Section_title
            highight_word={about_us_section_data.title.highlight_word}
            label={about_us_section_data.title.label}
            label_style={"text-[20px]! tracking-[4px]!"}
            title={about_us_section_data.title.main}
            title_style={"leading-[1.2]!"}
          />
          <p className="description leading-7.5 text-[16px] text-gray">
            {about_us_section_data.description}
          </p>
          <div className="features flex flex-col md:flex-row md:items-center gap-5">
            <div className="left flex flex-col gap-5">
              {about_us_section_data.features.map((feature, index) => {
                return (
                  <div
                    key={index}
                    className="feature flex flex-col md:flex-row gap-5"
                  >
                    <Icon_container icon={feature.icon} />
                    <div className="text ">
                      <h3 className="title text-[20px] font-bold">
                        {feature.title}
                      </h3>
                      <p className="text-gray">{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="right p-5 w-full md:w-[60%] rounded-[10px] bg-light leading-[1.8]">
              {about_us_section_data.fact_card.text}
            </div>
          </div>
          <div className="contact flex md:items-center flex-col md:flex-row gap-7.5 pt-5 border-top-1">
            <Master_button>
              <span className="relative z-2">DISCOVER MORE</span>
              <i className="fa-solid fa-arrow-right relative z-2"></i>
            </Master_button>
            <div className="flex  md:flex-row md:items-center  gap-2.5">
              <Icon_container
                icon={Assets.support_icon}
                container_style={
                  "max-w-[50px]! min-w-[50px]! max-h-[50px]! min-h-[50px]!"
                }
              />
              <div>
                <p className="text-secondary ">Call Now</p>
                <a
                  className="text-md text-primary font-bold"
                  href="tel:+010 1156 0550"
                >
                  +010 1156 0550
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs_section;
