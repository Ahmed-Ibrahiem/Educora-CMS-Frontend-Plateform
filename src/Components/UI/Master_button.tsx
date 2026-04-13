import type React from "react";

type propsType = {
  style?: string, children?: React.ReactNode, type?: "submit" | "button" | "reset" | undefined, action?: () => void
}
const Master_button = ({ style, children, type, action }: propsType) => {
  return (
    <button
      onClick={action}
      type={type}
      className={`master-button master-button-effect ${style}`}
    >
      <div className="content z-[2] relative flex gap-[8px] items-center">
        {children}
      </div>
    </button>
  );
};

export default Master_button;
