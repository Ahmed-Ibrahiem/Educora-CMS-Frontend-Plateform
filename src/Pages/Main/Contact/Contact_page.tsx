import Page_header from "../../../Components/Layout/Page_header";
import Contact_area from "./Contact_area";
import Contact_form from "./Contact_form";
import Our_location from "./Our_location";

const Contact_page = () => {
  return (
    <div>
      <Page_header page_name={"Contact Us"} />
      <Contact_area />
      <Contact_form />
      <Our_location />
    </div>
  );
};

export default Contact_page;
