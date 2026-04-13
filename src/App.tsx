import { Route, Routes } from "react-router-dom";
import MainLayout from "./Pages/Main/MainLayout";
import Home from "./Pages/Main/Home/Home";
import About_us from "./Pages/Main/About Us/About_us";
import Contact_page from "./Pages/Main/Contact/Contact_page";
import Courses_page from "./Pages/Main/Courses page/Courses_page";
import Course_details_page from "./Pages/Main/Course details Page/Course_details_page";
import Auth_layout from "./Pages/Auth/Auth_layout";
import Authentication_page from "./Pages/Auth/Authentication_page";
import Onboarding from "./Pages/Onboarding/Onboarding";
import Onboarding_complete from "./Pages/Onboarding/Onboarding_complete";
import Error404 from "./Components/UI/Error404";
import LoadingScreen from "./Components/UI/Loading_ui";
import { useGlobalLoadingContext } from "./Contexts/GlobalLoadingContext";
const App = () => {
  const { loadingCount } = useGlobalLoadingContext();

  return (
    <>
      <div className="app">
        {loadingCount > 0 && <LoadingScreen />}
        {
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About_us />} />
              <Route path="/contact" element={<Contact_page />} />
              <Route path="/courses" element={<Courses_page />} />
              <Route
                path="/course/:course_id"
                element={<Course_details_page />}
              />
              <Route path="*" element={<Error404 />} />
            </Route>

            <Route element={<Auth_layout />}>
              <Route path="/login" element={<Authentication_page />} />
              <Route path="/register_page" element={<Authentication_page />} />
              <Route path="/signin" element={<Authentication_page />} />
              <Route path="/signup" element={<Authentication_page />} />
              <Route path="/sign_up" element={<Authentication_page />} />
            </Route>

            <Route path="/onboarding" element={<Onboarding />} />
            <Route
              path="/onboarding_complete"
              element={<Onboarding_complete />}
            />
          </Routes>
        }
      </div>
    </>
  );
};

export default App;
