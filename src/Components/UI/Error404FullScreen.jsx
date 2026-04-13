import React from "react";

const Error404FullSCreen = () => {
  return (
    <div className="w-full h-screen elements-center-column gap-5">
      <div className="elements-center-column relative mb-5">
        <h1 className="text-[min(40vw)] md:text-[min(20vw)]  text-gray font-bold ">
          404
        </h1>
        <img
          src="/assets/error500screen.png"
          className="w-[60%] absolute bottom-5 md:bottom-10 "
          alt="Error 500 Image"
        />
      </div>
      <h2 className="text-2xl ">Internal Server Error</h2>
      <p className=" text-md lg:text-lg text-center text-gray max-w-[90%]">
        The server encountered an internal error or misconfiguration and was
        unable to complete your request
      </p>
    </div>
  );
};

export default Error404FullSCreen;
