import Page_header from "../Layout/Page_header";
import Master_link from "./Master_link";

const Error404 = () => {
  return (
    <>
      <Page_header page_name="404 Error" />
      <div className="elements-center-column w-full min-h-100 py-20 px-5">
        <img src="/src/assets/404.webp" alt="" className="min-w-75! w-150" />
        <h1 className="text-lg text-center md:text-[32px] mt-5 text-dark font-bold">
          Opos... Page Not Found!
        </h1>
        <p className="text-gray text-center mt-1.25">
          The page you looking for not found may be it not exist or removed.
        </p>
        <Master_link link={"/home"} style={"mt-7.5"}>
          <span>Go Back Home</span>
          <i className="fa-solid fa-house"></i>
        </Master_link>
      </div>
    </>
  );
};

export default Error404;
