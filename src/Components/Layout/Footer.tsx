import Logo from "../UI/Logo";
import { socialMedia } from "../../assets/Assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const footer_links = [
    {
      title: "Company",
      menu: ["About", "Contact Us", "News and Blogs"],
    },
    {
      title: "Community",
      menu: ["Documentation", "Faq", "Forum", "Sitemap"],
    },
    {
      title: "Teaching",
      menu: ["Become a teacher", "How to guide", "Terms & Conditions"],
    },
  ];
  return (
    <div className={footerStyle}>
      <div className="container flex flex-wrap justify-between gap-y-10 gap-x-5 relative z-2">
        <div className="part_one elements-column gap-5 max-w-75 min-w-62.5 md:max-w-[30%]">
          <Logo text_style={"text-white"} />
          <p className=" text-white leading-[1.8]">
            Eduport education theme, built specifically for the education
            centers which is dedicated to teaching and involve learners.
          </p>
          <div className="elements-row gap-2.5">
            {Object.entries(socialMedia).map(([key, value]) => {
              return (
                <Link
                  to={value.to}
                  key={key}
                  className="text-white bg-secondary w-7.5 h-7.5 elements-center-row rounded-[5px]"
                >
                  <i className={value.icon}></i>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer Links */}

        {footer_links.map((section, index) => {
          return (
            <div
              key={index}
              className="text-white text-[20px] w-[20%] min-w-62.5 max-w-full"
            >
              <h1 className="font-bold w-fit relative title_footer pb-5 mb-5 mt-5">
                {section.title}
              </h1>
              <ul className="elements-column gap-1.5">
                {section.menu.map((link, index1) => {
                  return (
                    <li
                      className="elements-row gap-2.5 text-[16px] hover:translate-x-2.5 duration-500 group/link"
                      key={index1}
                    >
                      <i className="fa-solid fa-caret-right text-secondary"></i>
                      <span className="opacity-70 group-hover/link:opacity-100! duration-100! cursor-pointer ">
                        {link}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const footerStyle = `
footer bg-footer relative before-sitting before:bg-[url(/src/assets/logo.png)] before:opacity-[0.07]
before:w-[60%]! before:h-[60%]! before:top-[50%]! before:left-[50%]! before:translate-[-50%]! before:bg-contain
before:bg-center before:bg-no-repeat py-[100px]
`;

export default Footer;
