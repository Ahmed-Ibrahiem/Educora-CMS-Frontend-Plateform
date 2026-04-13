import type React from "react";

type PriceType = {
  current: number;
  old: number;
};

type BadgesType = {
  best_seller: boolean;
  new: boolean;
  popular: boolean;
};

type CourseInfoType = {
  title: string;
  category: string;
  subcategory: string;
  description: string;
  rating: number;
  level: string;
  reviews_count: number;
  students_enrolled: number;
  last_updated: string;
  language: string;
  price: PriceType;
  instructor_name: string;
  thumbnail: string;
  promo_video: string;
  badges: BadgesType;
};

type CourseDescriptionType = {
  short_text: string;
  long_text: string;
};

type LectureType = {
  icon: "play" | "document" | "question" | "lock";
  title: string;
  duration: string;
  preview?: boolean;
  questions?: number;
};

type SectionType = {
  title: string;
  lectures_count: number;
  totalDuration: string;
  is_expanded?: boolean;
  lectures: LectureType[];
};

type CourseContent = {
  summary: {
    total_sections: number;
    total_lectures: number;
    total_duration: string;
  };
  sections: SectionType[];
};

type InstructorType = {
  id: number;
  name: string;
  role: string;
  bio: string;
  profile_image: string;
  reviews: string;
  rating: number;
  students: number;
  courses: number;
  social_links: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
};

type FeedbackType = {
  feedback_image?: string;
  name: string;
  rating?: number;
  time_ago: string;
  comment: string;
  title: string;
};

type ReviewsType = {
  average_rating: number;
  total_reviews: number;
  distribution: {
    "5_stars": number;
    "4_stars": number;
    "3_stars": number;
    "2_stars": number;
    "1_star": number;
  };
  feedback: FeedbackType[];
};

type CourseType = {
  path: string;
  id: string | number;
  course_info: CourseInfoType;
  description: CourseDescriptionType;
  what_you_will_learn: string[];
  requirements: string[];
  course_content: CourseContent;
  instructor: InstructorType;
  reviews: ReviewsType;
};

type cousreCardType = {
  id: number | string;
  level: string;
  title: string;
  description: string;
  rating: number;
  duration: string;
  lectures: number;
  category: string;
  image: string;
  instructor: {
    id: number;
    name: string;
    image: string;
  };
  price: number;
  totalEnrolled: number;
  reviews_count: number;
  badges: BadgesType;
};

type coursesContextType = {
  coursesData: CourseType[] | null;
  coursesCards: cousreCardType[];
};

export type {
  CourseType,
  BadgesType,
  InstructorType,
  ReviewsType,
  FeedbackType,
  CourseContent,
  LectureType,
  SectionType,
  coursesContextType,
  cousreCardType,
};
