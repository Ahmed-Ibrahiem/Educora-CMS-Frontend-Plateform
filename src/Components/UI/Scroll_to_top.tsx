import  { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const Scroll_to_top = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);
  return null;
};

export default Scroll_to_top;
