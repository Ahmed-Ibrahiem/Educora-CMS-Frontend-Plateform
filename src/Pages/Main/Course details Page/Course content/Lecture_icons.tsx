import React from "react";

const Lecture_icons = ({ type }: { type: string }) => {
  return (
    <>
      {type == "play" && (
        <div className={icon_circle}>
          <i className="fa-solid fa-play"></i>
        </div>
      )}

      {type == "document" && (
        <div className={`${icon_circle} ${document_circle}`}>
          <i className="fa-solid fa-file"></i>
        </div>
      )}

      {type == "lock" && (
        <div className={`${icon_circle} ${document_circle}`}>
          <i className="fa-solid fa-lock"></i>
        </div>
      )}

      {type == "question" && (
        <div className={`${icon_circle} ${document_circle}`}>
          <i className="fa-solid fa-question"></i>
        </div>
      )}
    </>
  );
};

const icon_circle = `
min-w-[30px] min-h-[30px] text-[12px]! elements-center-row rounded-[50%] text-primary bg-primary-light
`;

const document_circle = ` bg-gray-300! text-gray! `;

export default Lecture_icons;
