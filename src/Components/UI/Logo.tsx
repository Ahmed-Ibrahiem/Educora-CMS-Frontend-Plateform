import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

type propsType = {
  img_style?: string, text_style?: string
}

const Logo = ({ img_style, text_style }: propsType) => {
  return (
    <Link
      to={"/home"}
      className={`logo  w-fit elements-justify-between gap-2.5  `}
    >
      <div className={`h-15 lg:h-18.75 elements-center-row ${img_style} `}>
        <img src={logo} className="max-h-[80%]" alt="" />
      </div>
      <h1
        className={`text-primary text-[25px] lg:text-[35px] font-bold ${text_style}`}
      >
        edu<span className="text-secondary! ">cora</span>
      </h1>
    </Link>
  );
};

export default Logo;
