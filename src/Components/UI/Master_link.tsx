import { Link } from "react-router-dom";

type propsType = {
  link?: String;
  children?: React.ReactNode;
  style?: String;
};

const Master_link = ({ link, children, style }: propsType) => {
  return (
    <Link
      to={`${link}`}
      className={`block master-button master-button-effect ${style}`}
    >
      <div className="content elements-center-row gap-2.5 relative z-2 ">
        {children}
      </div>
    </Link>
  );
};

export default Master_link;
