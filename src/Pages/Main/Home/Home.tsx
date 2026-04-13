import Hero_section from "./Hero Section/Hero_section";
import Features_area from "./Features Area/Features_area";
import AboutUs_section from "./AboutUs section/AboutUs_section";
import Counter_area from "./Counter Area/Counter_area";
import Courses_section from "./Courses section/Courses_section";
import Our_teachers_section from "./Our teachers section/Our_teachers_section";
import Become_instructor from "./Become Instructor/Become_instructor";
import Our_tranding_courses from "./Our tranding courses/Our_tranding_courses";
import Testimonials_section from "./Testimonials Section/Testimonials_section";

const Home = () => {
  return (
    <div className="">
      <Hero_section />
      <Features_area />
      <AboutUs_section />
      {/* Counter Area */}
      <Counter_area />
      {/* Courses Section */}
      <Courses_section />
      {/* Teachers Section */}
      <Our_teachers_section />
      {/* Become Instructor Section */}
      <Become_instructor />
      {/* Testimonials Section */}
      <Testimonials_section />
      {/* Our Tranding Section */}
      <Our_tranding_courses />
    </div>
  );
};

export default Home;
