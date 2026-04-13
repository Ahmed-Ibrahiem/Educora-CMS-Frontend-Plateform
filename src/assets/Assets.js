import slide_one from "./slider-1.jpg";
import slide_two from "./slider-2.jpg";
import slide_three from "./slider-3.jpg";
import feature_1 from "./feature_1.png";
import feature_2 from "./feature_2.png";
import feature_3 from "./feature_3.png";
import feature_4 from "./feature_4.png";
import aboutUs_1 from "./aboutUs-1.jpg";
import aboutUs_2 from "./aboutUs-2.jpg";
import aboutUs_3 from "./aboutUs-3.jpg";
import aboutUs_4 from "./aboutUs-4.png";
import about_icon1 from "./about_icon1.png";
import about_icon2 from "./about_icon2.png";
import support_icon from "./support.png";
import my_img1 from "./feature_1.png";
import my_img2 from "./feature_2.png";
import my_img3 from "./feature_3.png";
import my_img4 from "./feature_4.png";
import course1 from "./course1.jpg";
import course2 from "./course2.jpg";
import course3 from "./course3.jpg";
import course4 from "./course4.jpg";
import course5 from "./course5.jpg";
import course6 from "./course6.png";
import teacher1 from "./teachers/user 4.png";
import teacher2 from "./teachers/user 11.png";
import teacher3 from "./teachers/user 18.png";
import teacher4 from "./teachers/user 8.png";
import teacher5 from "./teachers/user 6.png";
import teacher6 from "./teachers/user 10.png";
import tranding_course1 from "./tranding_courses/course1.jpg";
import tranding_course2 from "./tranding_courses/course2.jpg";
import tranding_course3 from "./tranding_courses/course3.jpg";
import tranding_course4 from "./tranding_courses/course4.jpg";
import tranding_course5 from "./tranding_courses/course5.jpg";
import tranding_course6 from "./tranding_courses/course6.jpg";
import student1 from "./users/Ellipse 20-1.png";
import student2 from "./users/Ellipse 20-2.png";
import student3 from "./users/Ellipse 20-2.png";
import student4 from "./users/user 14.png";
import student5 from "./users/user 15.png";
import student6 from "./users/user 16.png";

export const socialMedia = {
  facebook: {
    to: "https://www.facebook.com/",
    icon: "fa-brands fa-facebook-f",
  },
  whatsapp: {
    to: "https://www.whatsapp.com/",
    icon: "fa-brands fa-whatsapp",
  },
  linkedin: {
    to: "https://www.linkedin.com/",
    icon: "fa-brands fa-linkedin-in",
  },
  youtube: {
    to: "https://www.youtube.com/",
    icon: "fa-brands fa-youtube",
  },
  telegram: {
    to: "https://www.telegram.com/",
    icon: "fa-brands fa-telegram",
  },
  twitter: {
    to: "https://www.twitter.com/",
    icon: "fa-brands fa-x-twitter",
  },
  instagram: {
    to: "https://www.instagram.com/",
    icon: "fa-brands fa-instagram",
  },
};

/* 
===================================================
===================================================
===================================================
*/

export const Assets = {
  aboutUs_1,
  aboutUs_2,
  aboutUs_3,
  aboutUs_4,
  support_icon,
};

/* 
===================================================
===================================================
===================================================
*/

export const hero_slides = [
  {
    id: 1,
    welcome_text: "WELCOME TO LEARNEX!",
    main_title: "Build Your Powerful And Bold Career",
    highlight_word: "Bold",
    description:
      "There are plenty of creative learning paths available, but most have been designed carefully to help you grow with confidence and purpose.",
    buttons: [
      {
        text: "ABOUT MORE",
        url: "#",
        style: "primary",
      },
      {
        text: "LEARN MORE",
        url: "#",
        style: "secondary",
      },
    ],
    background_image: slide_one,
    background_alt:
      "Group of smiling students wearing graduation gowns and holding diplomas",
  },
  {
    id: 2,
    welcome_text: "WELCOME TO ACADEMIA!",
    main_title: "Shape Your Creative And Bright Tomorrow",
    highlight_word: "Bright",
    description:
      "There are many exciting programs ready for you, and each one brings a fresh chance to achieve more through knowledge and innovation.",
    buttons: [
      {
        text: "ABOUT MORE",
        url: "#",
        style: "primary",
      },
      {
        text: "LEARN MORE",
        url: "#",
        style: "secondary",
      },
    ],
    background_image: slide_two,
    background_alt:
      "Happy university students walking together holding books and backpacks",
  },
  {
    id: 3,
    welcome_text: "WELCOME TO FUTURIA!",
    main_title: "Start Your Inspiring And Great Journey",
    highlight_word: "Great",
    description:
      "There are different learning experiences waiting ahead, most built to inspire, engage, and guide you toward your personal success story.",
    buttons: [
      {
        text: "ABOUT MORE",
        url: "#",
        style: "primary",
      },
      {
        text: "LEARN MORE",
        url: "#",
        style: "secondary",
      },
    ],
    background_image: slide_three,
    background_alt:
      "Students celebrating their graduation outdoors with joy and excitement",
  },
];

/* 
===================================================
===================================================
===================================================
*/

export const Features_data = [
  {
    id: 1,
    icon: feature_1,
    title: "Financial Aid Program",
    description:
      "We provide financial assistance to deserving students to help them pursue their studies without worries.",
  },
  {
    id: 2,
    icon: feature_2,
    title: "Expert Instructors",
    description:
      "Our team of experienced lecturers ensures that every student gets a quality learning experience.",
  },
  {
    id: 3,
    icon: feature_3,
    title: "Comprehensive Library",
    description:
      "Students can access a wide range of books and digital resources for research and study.",
  },
  {
    id: 4,
    icon: feature_4,
    title: "Cost-Effective Courses",
    description:
      "We offer affordable tuition fees so that education remains accessible to everyone.",
  },
];

/* 
===================================================
===================================================
===================================================
*/

export const about_us_section_data = {
  section_id: "about",
  title: {
    label: "ABOUT US",
    main: "Our Educora Platform Inspires You To Learn More.",
    highlight_word: "Inspires",
  },
  description:
    "Educora offers a wide range of online lessons designed to help learners improve their skills easily and effectively. Each course is carefully built to ensure a smooth and enjoyable learning experience.",
  features: [
    {
      icon: about_icon1,
      title: "Educora Services",
      text: "It is a long established fact that reader will to using content.",
    },
    {
      icon: about_icon2,
      title: "Learning Hubs",
      text: "It is a long established fact that reader will to using content.",
    },
  ],
  fact_card: {
    text: "It is a long established fact that a reader will be distracted by the content of a page when looking at its reader for the long words layout.",
    rating: 99,
  },
  experience: {
    years: "10 Years Of Smart Education",
  },
  cta: {
    button: "Discover More",
    phone_label: "Call Now",
    phone_number: "+2 123 654 7898",
  },
};

/* 
===================================================
===================================================
===================================================
*/

export const counter_data = [
  {
    id: 1,
    icon: my_img1,
    count: 500,
    title: "+ Total Courses",
  },
  {
    id: 2,
    icon: my_img2,
    count: 1900,
    title: "+ Our Students",
  },
  {
    id: 3,
    icon: my_img3,
    count: 750,
    title: "+ Skilled Lecturers",
  },
  {
    id: 4,
    icon: my_img4,
    count: 30,
    title: "+ Win Awards",
  },
];

/* 
===================================================
===================================================
===================================================
*/

export const courses_sction = {
  courses: [
    {
      id: 1,
      level: "All level",
      title: "Sketch App Design",
      description:
        "Learn how to design complete mobile app interfaces using Sketch tools, layouts, and components with professional techniques.",
      rating: 5,
      duration: "12h 56m",
      lectures: 15,
      category: "Design",
      image: course1,
    },
    {
      id: 2,
      level: "Beginner",
      title: "Graphic Design Pro",
      description:
        "Master graphic design skills and learn to create modern visuals with Photoshop, branding, typography, and digital creativity techniques.",
      rating: 4.7,
      duration: "9h 56m",
      lectures: 65,
      category: "Design",
      image: course2,
    },
    {
      id: 3,
      level: "Beginner",
      title: "Figma Design System",
      description:
        "Create reusable components and professional UI systems in Figma while learning advanced layout grids and design collaboration tools.",
      rating: 4.6,
      duration: "5h 56m",
      lectures: 32,
      category: "UI/UX",
      image: course3,
    },
    {
      id: 4,
      level: "Beginner",
      title: "AI with React Native",
      description:
        "Develop mobile apps powered by AI using React Native, TensorFlow integration, and modern JavaScript best practices for Android and iOS.",
      rating: 4.5,
      duration: "18h 56m",
      lectures: 99,
      category: "Programming",
      image: course4,
    },
    {
      id: 5,
      level: "Intermediate",
      title: "Full Web Bootcamp",
      description:
        "Learn full-stack web development with HTML, CSS, and JavaScript from basics to advanced real-world projects for portfolio building.",
      rating: 4.8,
      duration: "20h 10m",
      lectures: 120,
      category: "Programming",
      image: course5,
    },
    {
      id: 6,
      level: "Beginner",
      title: "Python Basics",
      description:
        "Start your Python journey by understanding syntax, loops, functions, and real examples to build strong programming fundamentals fast.",
      rating: 4.7,
      duration: "8h 30m",
      lectures: 55,
      category: "Programming",
      image: course6,
    },
    {
      id: 7,
      level: "All level",
      title: "Excel Data Analysis",
      description:
        "Master Excel data analysis, charts, formulas, and pivot tables to manage, visualize, and present professional datasets effectively.",
      rating: 4.6,
      duration: "7h 50m",
      lectures: 48,
      category: "Data Analysis",
      image: "images/excel-course.jpg",
    },
    {
      id: 8,
      level: "Intermediate",
      title: "Advanced JavaScript",
      description:
        "Deep dive into closures, promises, async functions, and OOP principles in JavaScript to write powerful and maintainable code.",
      rating: 4.9,
      duration: "10h 45m",
      lectures: 72,
      category: "Programming",
      image: "images/javascript-course.jpg",
    },
    {
      id: 9,
      level: "Beginner",
      title: "After Effects UI",
      description:
        "Design and animate stunning UI transitions using After Effects tools, motion curves, and timing for web and mobile experiences.",
      rating: 4.5,
      duration: "6h 15m",
      lectures: 40,
      category: "Animation",
      image: "images/aftereffects-course.jpg",
    },
    {
      id: 10,
      level: "Advanced",
      title: "TensorFlow Mastery",
      description:
        "Learn how to train, test, and deploy deep learning models using TensorFlow with hands-on machine learning and AI projects.",
      rating: 4.8,
      duration: "22h 20m",
      lectures: 130,
      category: "AI",
      image: "images/tensorflow-course.jpg",
    },
  ],
  section_id: "courses",
  title: {
    label: "OUR COURSES",
    main: "Let's Check Our Courses",
    highlight_word: "Courses",
  },
};

/* 
===================================================
===================================================
===================================================
*/

export const our_teachers_section = {
  teachers: [
    {
      id: 1,
      teacher_image: teacher1,
      teacher_name: "Mostafa Mahmoud",
      teacher_position: "Associate Professor",
      social_media: {
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me",
        linkedin: "https://linkedin.com/in",
        youtube: "https://www.youtube.com",
      },
      teacher_page: "#",
    },

    {
      id: 2,
      teacher_image: teacher2,
      teacher_name: "Asmaa Yasser",
      teacher_position: "Associate Professor",
      social_media: {
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me",
        linkedin: "https://linkedin.com/in",
        youtube: "https://www.youtube.com",
      },
      teacher_page: "#",
    },
    {
      id: 3,
      teacher_image: teacher4,
      teacher_name: "Khalid Saed",
      teacher_position: "CEO & Founder",
      social_media: {
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me",
        linkedin: "https://linkedin.com/in",
        youtube: "https://www.youtube.com",
      },
      teacher_page: "#",
    },
    {
      id: 4,
      teacher_image: teacher3,
      teacher_name: "Mona Adham",
      teacher_position: "Associate Professor",
      social_media: {
        facebook: "https://facebook.com",
        whatsapp: "https://wa.me",
        linkedin: "https://linkedin.com/in",
        youtube: "https://www.youtube.com",
      },
      teacher_page: "#",
    },
  ],
  section_id: "teachers",
  title: {
    label: "Our Teachers",
    main: "Meet With Our Teachers",
    highlight_word: "Teachers",
  },
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
};

/* 
===================================================
===================================================
===================================================
*/

export const trending_courses_section = {
  section_id: "trending_courses",
  title: {
    label: "TRENDING NOW",
    main: "Most Popular & Trending Courses",
    highlight_word: "Trending",
    desc: "It is a well-known fact that students are more engaged when exploring trending courses that reflect the latest skills and technologies shaping modern education.",
  },
};

/* 
===================================================
===================================================
===================================================
*/

export const testimonials = [
  {
    id: 1,
    rating: 5,
    score: 99,
    feedback:
      "This platform made learning web development so simple. The lessons are practical and easy to follow, even for beginners like me.",
    student: {
      id: 201,
      name: "Edward Miles",
      role: "Student",
      image: student1,
    },
    course_title: "Modern Web Development",
  },
  {
    id: 2,
    rating: 5,
    score: 99,
    feedback:
      "I’ve learned more in two months here than in an entire semester at college. The instructors really know how to teach effectively.",
    student: {
      id: 202,
      name: "Ninal Gordon",
      role: "Student",
      image: student2,
    },
    course_title: "UI/UX Design from Scratch",
  },
  {
    id: 3,
    rating: 5,
    score: 99,
    feedback:
      "Great course quality and amazing community. I especially loved how the projects helped me build a solid portfolio fast.",
    student: {
      id: 203,
      name: "Anthony Nicoll",
      role: "Student",
      image: student3,
    },
    course_title: "Full Web Bootcamp",
  },
  {
    id: 4,
    rating: 5,
    score: 99,
    feedback:
      "The lessons are detailed and engaging. I gained confidence to apply for my first job as a junior developer. Highly recommended!",
    student: {
      id: 204,
      name: "Richard Lock",
      role: "Student",
      image: student4,
    },
    course_title: "Python Basics",
  },
  {
    id: 5,
    rating: 4.8,
    score: 97,
    feedback:
      "I loved the practical exercises and quizzes after every lesson. They really helped me remember everything I learned.",
    student: {
      id: 205,
      name: "Sophia Turner",
      role: "Student",
      image: student5,
    },
    course_title: "Data Science with Python",
  },
  {
    id: 6,
    rating: 4.9,
    score: 98,
    feedback:
      "The instructors explain complex topics like machine learning in such a simple way. Definitely worth every penny!",
    student: {
      id: 206,
      name: "Daniel Carter",
      role: "Student",
      image: student6,
    },
    course_title: "AI for Beginners",
  },
  {
    id: 7,
    rating: 5,
    score: 99,
    feedback:
      "Amazing course! The support team and discussion forums helped me solve every problem I faced while learning.",
    student: {
      id: 207,
      name: "Emma Collins",
      role: "Student",
      image: "images/students/emma-collins.jpg",
    },
    course_title: "React Native Complete Guide",
  },
  {
    id: 8,
    rating: 4.7,
    score: 96,
    feedback:
      "I’ve taken online courses before, but none were as structured and interactive as this one. The projects are so fun!",
    student: {
      id: 208,
      name: "Noah Johnson",
      role: "Student",
      image: "images/students/noah-johnson.jpg",
    },
    course_title: "Digital Marketing Mastery",
  },
  {
    id: 9,
    rating: 4.9,
    score: 98,
    feedback:
      "The platform’s UI is clean and easy to navigate. I could track my progress and earn certificates seamlessly.",
    student: {
      id: 209,
      name: "Olivia Brown",
      role: "Student",
      image: "images/students/olivia-brown.jpg",
    },
    course_title: "Advanced Excel Dashboard",
  },
  {
    id: 10,
    rating: 5,
    score: 99,
    feedback:
      "The community here is amazing. I met other students and worked on group projects which made learning much more fun.",
    student: {
      id: 210,
      name: "Liam Anderson",
      role: "Student",
      image: "images/students/liam-anderson.jpg",
    },
    course_title: "3D Animation in Blender",
  },
];

/* 
===================================================
===================================================
===================================================
*/

export const administrator_widget = [
  {
    id: 1,
    title: "Courses' progress status",
    icon: `fa-solid fa-bars-progress`,
  },
  {
    id: 2,
    title: "Portal activity",
    icon: `fa-solid fa-chart-line`,
  },
  {
    id: 3,
    title: "Timeline",
    icon: `fa-solid fa-timeline`,
  },
  {
    id: 4,
    title: "Users",
    icon: `fa-solid fa-users`,
  },
];

export const instructor_widget = [
  {
    id: 1,
    title: "Courses' progress status",
    icon: `fa-solid fa-bars-progress`,
  },
  {
    id: 2,
    title: "Courses’ completion rate",
    icon: "fa-solid fa-list-check",
  },
  {
    id: 3,
    title: "Don't miss",
    icon: "fa-solid fa-circle-exclamation",
  },
  {
    id: 4,
    title: "Recent course activity",
    icon: "fa-solid fa-chart-bar",
  },
  {
    id: 5,
    title: "Today",
    icon: "fa-regular fa-calendar-days",
  },
];
/* 
===================================================
===================================================
===================================================
*/

export const administrator_tabs = [
  {
    title: "Home",
    link: "/home",
    icon: "fa-solid fa-home",
  },
  {
    title: "User",
    link: "/user",
    icon: "fa-solid fa-user",
  },
  {
    title: "Courses",
    link: "/courses",
    icon: "fa-solid fa-book",
  },
  {
    title: "Notification",
    link: "/notification",
    icon: "fa-solid fa-bell",
  },
  {
    title: "Learning Path",
    link: "/learning_path",
    icon: "fa-solid fa-route",
  },
  {
    title: "Groups",
    link: "/group",
    icon: "fa-solid fa-user-group",
  },
  {
    title: "Reports",
    link: "/reports",
    icon: "fa-solid fa-chart-pie",
    nested_menu: [
      { title: "Users", link: "reports/users", icon: "fa-solid fa-user" },
      { title: "Courses", link: "reports/courses", icon: "fa-solid fa-book" },
      {
        title: "Learning path",
        link: "reports/learning_path",
        icon: "fa-solid fa-route",
      },
      {
        title: "Groups",
        link: "reports/groups",
        icon: "fa-solid fa-user-group",
      },
      {
        title: "Timeline",
        link: "reports/timeline",
        icon: "fa-solid fa-timeline",
      },
    ],
  },
  {
    title: "Account & Settings",
    link: "/account_setting",
    icon: "fa-solid fa-gear",
  },
];

export const instructor_tabs = [
  {
    title: "Home",
    link: "/home",
    icon: "fa-solid fa-home",
  },
  {
    title: "Student",
    link: "/student",
    icon: "fa-solid fa-user",
  },
  {
    title: "My Courses",
    link: "/courses",
    icon: "fa-solid fa-book",
  },
  {
    title: "Assignment / Quizzes",
    link: "/assignment",
    icon: "fa-solid fa-clipboard-question",
  },
  {
    title: "Messages",
    link: "/messages",
    icon: "fa-solid fa-envelope",
  },
  {
    title: "Notification",
    link: "/notification",
    icon: "fa-solid fa-bell",
  },
  {
    title: "Profile",
    link: "/profile",
    icon: "fa-solid fa-circle-user",
  },
];

export const learner_tabs = [
  {
    title: "Home",
    link: "/home",
    icon: "fa-solid fa-home",
  },
  {
    title: "My Courses",
    link: "/courses",
    icon: "fa-solid fa-book",
  },
  {
    title: "Messages",
    link: "/messages",
    icon: "fa-solid fa-envelope",
  },
  {
    title: "Notification",
    link: "/notification",
    icon: "fa-solid fa-bell",
  },
  {
    title: "Profile",
    link: "/profile",
    icon: "fa-solid fa-circle-user",
  },
];

/* 
===================================================
===================================================
===================================================
*/

export const quick_actions_admin = [
  {
    title: "Add User",
    link: "/add_user",
    icon: "fa-solid fa-user-plus",
  },
  {
    title: "Add Course",
    link: "/add_course",
    icon: "fa-solid fa-book-open",
  },
  {
    title: "Create Group",
    link: "/create_group",
    icon: "fa-solid fa-object-group",
  },
  {
    title: "Create Learner Path",
    link: "/create_learner_path",
    icon: "fa-solid fa-map-signs",
  },
  {
    title: "Portal Settings",
    link: "/portal_settings",
    icon: "fa-solid fa-sliders-h",
  },
];

export const quick_actions_instructor = [
  {
    title: "Create Assignment / Quiz",
    link: "/create_quiz",
    icon: "fa-solid fa-clipboard-check",
  },
  {
    title: "Add Content to My Course",
    link: "/add_content",
    icon: "fa-solid fa-file-import",
  },
  {
    title: "Message Student",
    link: "/message_student",
    icon: "fa-solid fa-comments",
  },
  {
    title: "Review Submissions",
    link: "/review_submissions",
    icon: "fa-solid fa-eye",
  },
  {
    title: "View Notifications",
    link: "/view_notifications",
    icon: "fa-solid fa-bell",
  },
];

/* 
===================================================
===================================================
===================================================
*/

export const overview_admin = [
  {
    title: "Total Users",
    info: "0",
    icon: "fa-solid fa-users",
  },
  {
    title: "Total Courses",
    info: "0",
    icon: "fa-solid fa-book",
  },
  {
    title: "Total Groups",
    info: "0",
    icon: "fa-solid fa-layer-group",
  },
  {
    title: "Total Learning Paths",
    info: "0",
    icon: "fa-solid fa-road",
  },
  {
    title: "Pending Notifications",
    info: "0",
    icon: "fa-solid fa-bell",
  },
];

export const overview_instructor = [
  {
    title: "Total Students in My Courses",
    info: "0",
    icon: "fa-solid fa-user-graduate",
  },
  {
    title: "My Courses Count",
    info: "0",
    icon: "fa-solid fa-book-open",
  },
  {
    title: "Pending Submissions",
    info: "0",
    icon: "fa-solid fa-hourglass-half",
  },
  {
    title: "Messages Received",
    info: "0",
    icon: "fa-solid fa-envelope",
  },
  {
    title: "Quizzes/Assignments Created",
    info: "0",
    icon: "fa-solid fa-tasks",
  },
];

export const overview_learner = [
  {
    title: "My Courses Count",
    info: "0",
    icon: "fa-solid fa-book-open",
  },
  {
    title: "Courses In Progress",
    info: "0",
    icon: "fa-solid fa-spinner",
  },
  {
    title: "Completed Courses",
    info: "0",
    icon: "fa-solid fa-check-circle",
  },
  {
    title: "Pending Assignments/Quizzes",
    info: "0",
    icon: "fa-solid fa-hourglass-half",
  },
  {
    title: "Unread Messages / Notifications",
    info: "0",
    icon: "fa-solid fa-bell",
  },
];

/* 
===================================================
===================================================
===================================================
*/
