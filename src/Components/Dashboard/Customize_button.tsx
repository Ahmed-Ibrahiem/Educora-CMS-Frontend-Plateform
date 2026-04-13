// import { useRef, useState } from "react";
// import { use_popups_context } from "../../Contexts/Popups_context";
// import { use_out_side_click } from "../../Utils/Componets_utils";
// import { use_access_controll_context } from "../../Contexts/Access_control_provider";

// const Customize_button = () => {
//   const [is_actions_open, set_is_actions_open] = useState(false);
//   const actions_menu_ref = useRef(null);
//   const { toggle_popup_case } = use_popups_context();
//   const { access_control, dispatch_access_control } =
//     use_access_controll_context();

//   const close_actions_menu = () => {
//     set_is_actions_open(false);
//   };
//   const toggle_actions_menu_state = () => {
//     set_is_actions_open(!is_actions_open);
//   };

//   const toggle_edit_mode = () => {
//     dispatch_access_control({ type: "TOGGLE_EDIT_MODE" });
//   };

//   use_out_side_click(actions_menu_ref, close_actions_menu);
//   return (
//     <>
//       {!access_control.edit_mode && (
//         <div className="relative z-[5]" ref={actions_menu_ref}>
//           <button
//             onClick={toggle_actions_menu_state}
//             className={`${customize_button_className}`}
//           >
//             <span>Customize</span>
//             <i
//               className={` fa-solid fa-angle-right ${
//                 is_actions_open ? "rotate-[90deg]" : ""
//               }`}
//             ></i>
//           </button>
//           <div
//             className={`${actions_className} ${
//               is_actions_open ? "fade-in-animation" : "fade-out-animation"
//             }`}
//           >
//             <button
//               onClick={toggle_edit_mode}
//               className={`${actions_button_className}`}
//             >
//               <i className="fa-regular fa-pen-to-square"></i>
//               <span>Edit Mode</span>
//             </button>
//             <button
//               className={`${actions_button_className}`}
//               onClick={() => {
//                 toggle_popup_case("TOGGLE_WIDGET_POPUP_CASE");
//                 close_actions_menu();
//               }}
//             >
//               <i className="fa-solid fa-plus"></i>
//               <span>Add Widget</span>
//             </button>
//           </div>
//         </div>
//       )}

//       {access_control.edit_mode && (
//         <div className="elements-row gap-[20px]">
//           <button className={`${customize_button_className}`}>Save</button>
//           <button
//             className={`${cancel_button_className}  `}
//             onClick={toggle_edit_mode}
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// const customize_button_className = `
// p-[5px_10px] elements-center-row gap-[10px] text-primary hover:bg-primary rounded-[5px] border-[2px] hover:border-transperant
// bg-transparent border-primary hover:text-white text-[14px] sm:text-[16px]
// `;

// const cancel_button_className = `
// p-[5px_10px] text-gray hover:bg-gray-200 rounded-[5px] border-[2px] border-gray-400
// `;

// const actions_className = `
// actions elements-column items-start p-[10px] bg-bg border-[1px] border-border-color rounded-[5px]
// absolute top-[calc(100%+5px)] left-0 sm:left-auto sm:right-0 w-[200px] z-0 
// `;

// const actions_button_className = `
//   elements-row gap-[10px] p-[5px] hover:bg-hover-color w-full text-dark
// `;

// export default Customize_button;
