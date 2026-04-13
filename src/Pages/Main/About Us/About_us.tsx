import AboutUs_section from "../Home/AboutUs section/AboutUs_section";
import Counter_area from "../Home/Counter Area/Counter_area";
import Our_tranding_courses from "../Home/Our tranding courses/Our_tranding_courses";
import Testimonials_section from "../Home/Testimonials Section/Testimonials_section";
import Page_header from "../../../Components/Layout/Page_header";

const About_us = () => {
  return (
    <>
      <Page_header page_name={"About Us"} />
      <AboutUs_section />
      <Counter_area />
      <Testimonials_section />
      <Our_tranding_courses />
    </>
  );
};

export default About_us;
