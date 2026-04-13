import React, { createContext, useContext, useMemo } from "react";
import type {
  coursesContextType,
  CourseType,
  cousreCardType,
} from "../types/courses.type";
import { useFetch } from "../Hooks/UserFetch";
import Error404FullSCreen from "../Components/UI/Error404FullScreen";

// Create context with initial value null
const coursesContext = createContext<coursesContextType | null>(null);

// Props type for provider (wraps children components)
type propsType = { children: React.ReactNode };

// Provider component that supplies courses data to the app
const CoursesProvider = ({ children }: propsType) => {
  // Store transformed courses (simplified cards data)

  const { data, error } = useFetch<CourseType[]>("/all_courses.json");

  let coursesData: CourseType[] = data || [];

  const coursesCards = useMemo(() => {
    // Prevent processing if no data exists
    if (!coursesData.length) return [];

    return coursesData.map(
      (data): cousreCardType => ({
        id: data.id,
        category: data.course_info.category,
        description: data.description.short_text,
        duration: data.course_content.summary.total_duration,
        image: data.course_info.thumbnail,
        lectures: data.course_content.sections.length,
        level: data.course_info.level,
        rating: data.course_info.rating,
        title: data.course_info.title,
        instructor: {
          id: data.instructor.id,
          name: data.instructor.name,
          image: data.instructor.profile_image,
        },
        price: data.course_info.price.current,
        totalEnrolled: data.course_info.students_enrolled,
        reviews_count: data.course_info.reviews_count,
        badges: data.course_info.badges,
      }),
    );
  }, [coursesData]);

  // Value provided to all components consuming this context
  const value = useMemo(
    () => ({
      coursesData,
      coursesCards,
    }),
    [coursesData, coursesCards],
  );

  if (error) {
    return <Error404FullSCreen />;
  }

  return (
    // Provide context to children components
    <coursesContext.Provider value={value}>{children}</coursesContext.Provider>
  );
};

// Custom hook to use courses context بسهولة
export const useCoursesContext = () => {
  const context = useContext(coursesContext);

  // Ensure the hook is used داخل provider فقط
  if (!context) {
    throw new Error("useCoursesContext must used in CoursesProvider");
  }

  return context;
};

export default CoursesProvider;
