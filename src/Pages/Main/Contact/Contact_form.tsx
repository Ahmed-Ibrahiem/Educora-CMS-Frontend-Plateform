import Master_button from "../../../Components/UI/Master_button";
import contact_image from "/src/assets/contact_image.jpg";

const Contact_form = () => {
  return (
    <div className="pb-[100px]">
      <div className="container flex flex-col gap-[20px] lg:gap-[30px] bg-white card-shadow rounded-[15px] overflow-hidden lg:flex-row">
        {/* Left Part */}
        <div className="left min-w-[50%] min-h-full! relative before-sitting contact-form-left pl-[5px] lg:pl-[10px]">
          <div className="img_box h-full w-full contact-form-left-img ">
            <img
              src={contact_image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        {/* Right Part */}
        <div className="right p-[10px] pb-[20px] lg:py-[20px] lg:pr-[40px] elements-column gap-[30px]">
          <div className="title elements-column gap-[10px]">
            <h1 className="text-[30px] font-bold text-dark">Let's talk</h1>
            <p className="text-gray leading-[1.5]">
              To request a quote or want to meet up for coffee, contact us
              directly or fill out the form and we will get back to you promptly
            </p>
          </div>
          <form
            action="#"
            className="elements-column gap-[20px]"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Form Content */}
            <div className="box elements-column gap-[10px]">
              <span>Your Name</span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input_box "
              />
            </div>
            <div className="box elements-column gap-[10px]">
              <span>Your Email</span>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input_box"
              />
            </div>
            <div className="box elements-column gap-2.5">
              <span>Your Message</span>
              <textarea
                placeholder="Write Your Message"
                className="input_box h-37.5"
              ></textarea>
            </div>
            {/* Form Content */}
          </form>
          <Master_button>
            <p>Send Message</p>
            <i className="fa-solid fa-paper-plane"></i>
          </Master_button>
        </div>
      </div>
    </div>
  );
};

export default Contact_form;
