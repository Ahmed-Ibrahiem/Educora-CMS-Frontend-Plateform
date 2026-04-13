import { Link } from "react-router-dom";
import Logo from "../../Components/UI/Logo";

const Onboarding_complete = () => {
  return (
    <>
      <header className="w-full px-[20px] border-b-[1px] border-b-gray-300">
        <Logo img_style={"w-[50px]!"} />
      </header>
      <div className="container mt-[100px]">
        <h1 className="text-[30px] mb-[30px]">
          Thank you for your answers ahmed_ibrahiem! What would you like to do
          first?
        </h1>
        <div className=" grid auto-rows-[200px] md:auto-rows-[250px] grid-cols-1 md:grid-cols-3 gap-[30px]">
          <div className={` group ${create_card_btn_className}`}>
            <button className={`${internal_buttons_className}`}>
              <i className="fa-solid fa-rocket text-[30px]"></i>
              <p>Generate with Ai</p>
            </button>
            <button type="button" className={`${internal_buttons_className}`}>
              <i className="fa-regular fa-copy text-[30px]"></i>
              <p>Upload your content</p>
            </button>
            <button className={`${internal_buttons_className}`}>
              <i className="fa-solid fa-pen-to-square text-[30px]"></i>
              <p>Build from scratch</p>
            </button>
            <div className={`${create_card_cover_className}`}>
              <i className="fa-solid fa-pen-to-square text-[45px]"></i>
              <h3 className={`${card_title}`}>Create a course</h3>
              <p className={`${desc_title}`}>Develope education content</p>
            </div>
          </div>

          <button className={card_className}>
            <i className="fa-solid fa-house text-[45px]"></i>
            <h3 className={`${card_title}`}>Explore Dashbaord</h3>
            <p className={`${desc_title}`}>Optimize central operation</p>
          </button>

          <button className={card_className}>
            <i className="fa-solid fa-gear text-[45px]"></i>
            <h3 className={`${card_title}`}>Configure Portal</h3>
            <p className={`${desc_title}`}>Personalize system settings</p>
          </button>
        </div>
        <div className="link w-full text-end mt-[10px]">
          <Link to={"/home"} className="decoration-gray text-gray underline">
            Skip tutorial
          </Link>
        </div>
      </div>
    </>
  );
};

const card_className = `bg-gray-100 border-gray-300 border-[1px] rounded-[10px] elements-center-column
gap-[20px] text-gray hover:bg-primary hover:text-white! group relative cursor-pointer`;

const create_card_btn_className = `relative cursor-pointer elements-center-column gap-[20px] `;

const create_card_cover_className = `create_button_cover bg-gray-100 border-gray-300 absolute opacity-[1] z-0 group-hover:opacity-[0] top-0 left-0 w-full h-full
border-[1px] elements-center-column gap-[20px] text-gray rounded-[5px] duration-100!`;

const internal_buttons_className = `invisible! opacity-0 group-hover:opacity-[1] duration-200! group-hover:visible! elements-center-row gap-[10px] text-[18px]
bg-gray-200 hover:text-white hover:bg-primary w-full grow rounded-[10px] z-[5] 
`;

const card_title = `text-[20px] font-medium text-dark group-hover:text-white!`;

const desc_title = `text-[14px]`;

export default Onboarding_complete;
