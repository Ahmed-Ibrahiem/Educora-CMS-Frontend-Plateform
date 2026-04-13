import { Link } from "react-router-dom";

const Page_header = ({ page_name }: { page_name: string }) => {
  return (
    <div className="py-45 bg-[url(/src/assets/page_header.jpg)] bg-cover   bg-no-repeat relative before-sitting before:bg-black before:opacity-65">
      <div className="container relative z-2 elements-center-column gap-5 ">
        <h1 className="text-[48px] font-bold text-white ">{page_name}</h1>
        <div className="elements-center-row gap-1.25 text-[20px] text-white font-medium ">
          <Link to={"/home"} className="hover:text-primary">
            Home
          </Link>
          <i className="fa-solid fa-angles-right"></i>
          <span className="text-secondary">{page_name}</span>
        </div>
      </div>
    </div>
  );
};

export default Page_header;
