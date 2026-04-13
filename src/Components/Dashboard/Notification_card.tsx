import React from "react";

const Notification_card = () => {
  return (
    <div className="message elements-row gap-2.5 border-b bg-bg  border-b-border-color py-2.5">
      <div className="icon w-10 h-10 text-dark elements-center-column bg-orange-600 rounded-[50%] text-md sm:text-[20px]">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="message-content elements-column items-start text-[14px] text-gray">
        <h3 className="title font-medium text-dark">Your resume update!</h3>
        <p className="message-time">1 Hours Ago</p>
      </div>
    </div>
  );
};

export default Notification_card;
