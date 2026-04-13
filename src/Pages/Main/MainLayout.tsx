import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../../Components/Layout/Footer";
import Search_popup from "../../Components/Layout/Search_popup";
import Header from "../../Components/UI/Header/Header";

const MainLayout = () => {
  const [is_search_popup_active, setIs_search_popup_active] =
    useState<boolean>(false);

  const close_search_popup = (): void => {
    setIs_search_popup_active(false);
  };

  const open_search_popup = (): void => {
    setIs_search_popup_active(true);
  };
  return (
    <>
      <Header open_search_popup={open_search_popup} />
      <Search_popup
        is_popup_active={is_search_popup_active}
        close_search_popup={close_search_popup}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
