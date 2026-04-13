// import { useEffect, useState } from "react";
// import Nested_menu from "../Nested_menu";
// import {
//   administrator_tabs,
//   instructor_tabs,
//   learner_tabs,
// } from "../../assets/Assets";
// import { use_access_controll_context } from "../../Contexts/Access_control_provider";

// const Tabs_content = () => {
//   // State to keep track of the currently active tab
//   const [current_tab, set_current_tab] = useState("home");

//   // Get the current user's role from context
//   const { access_control } = use_access_controll_context();

//   // State to hold tabs depending on the role
//   const [tabs, set_tabs] = useState(administrator_tabs);

//   // Function to change the current tab
//   const toggle_current_tab = (tab) => {
//     set_current_tab(tab);
//   };

//   // Update tabs whenever the user's role changes
//   useEffect(() => {
//     if (access_control.role === "administrator") {
//       set_tabs(administrator_tabs);
//     } else if (access_control.role === "instructor") {
//       set_tabs(instructor_tabs);
//     } else if (access_control.role === "learner") {
//       set_tabs(learner_tabs);
//     } else {
//       // Throw an error if the role is invalid
//       throw Error("Something went wrong with role");
//     }
//   }, [access_control.role]);

//   return (
//     // Main container for all tabs
//     <ul className={ul_className}>
//       {tabs.map((tab, index) => {
//         return (
//           // Each tab item
//           <li
//             key={index}
//             className={`${tab_button_className} ${
//               tab.title.toLowerCase() === current_tab
//                 ? current_tab_className
//                 : ""
//             }`}
//             onClick={() => toggle_current_tab(tab.title.toLowerCase())}
//           >
//             <button className={` w-full elements-justify-between`}>
//               {/* Left side: icon and title */}
//               <div className={`elements-row gap-[10px]`}>
//                 <i className={`${tab.icon}`}></i>{" "}
//                 {/* Render Font Awesome icon */}
//                 <p>{tab.title}</p> {/* Display tab title */}
//               </div>

//               {/* Right side: show arrow if nested menu exists */}
//               {tab.nested_menu && <i className="fa-solid fa-angle-right"></i>}
//             </button>

//             {/* Render nested menu if it exists */}
//             {tab.nested_menu && <Nested_menu nested_menu={tab.nested_menu} />}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// // Styles for each tab button
// const tab_button_className = `
// elements-column gap-[15px] rounded-[10px] w-full p-[12px] w-full
// hover:bg-secondary-light cursor-pointer relative group max-h-[45px] md:max-h-[55px] hover:max-h-[500px]
// overflow-hidden duration-500! md:overflow-visible
// `;

// // Style for the currently active tab
// const current_tab_className = `bg-secondary! text-white`;

// // Style for the main ul container
// const ul_className = `elements-column text-[14px] text-dark min-w-[200px]! relative! gap-[10px] bg-bg`;

// export default Tabs_content;
