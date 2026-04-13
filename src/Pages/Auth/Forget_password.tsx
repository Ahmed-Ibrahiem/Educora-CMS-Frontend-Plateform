import FormBox from "../../Components/FormBox";
import Master_button from "../../Components/UI/Master_button";

type propsType = {
  is_forget_password: boolean;
  toggle_forget_password: () => void;
};

const Sing_up_form = ({
  is_forget_password,
  toggle_forget_password,
}: propsType) => {
  return (
    <div
      className={`${forget_password_style} ${
        is_forget_password
          ? "visible! show-auth-popup-animate"
          : "hide-auth-popup-animate"
      }`}
    >
      <div className="elements-center-column gap-[5px]">
        <h1 className="text-[30px] text-dark font-bold text-center">
          Forget Password
        </h1>
        <p className="text-center mb-[10px]  text-gray">
          To receive a new password, enter your email address below.
        </p>
        <p className="text-center mb-[10px]  text-gray">
          Already have an account{" "}
          <span onClick={toggle_forget_password} className={log_in_style}>
            Log in
          </span>
        </p>
      </div>
      <form className={`${form_style} `} onSubmit={(e) => e.preventDefault()}>
        <FormBox
          box_style={"w-full!"}
          type={"email-input"}
          input_name={"Email Address"}
          input_placeholder={"Enter Your Email"}
        />
      </form>
      <Master_button style={"w-full!"}>
        <span>Reset Password</span>
      </Master_button>
    </div>
  );
};

const forget_password_style = `
forget_password_area  card-shadow bg-white rouned-[10px] p-[10px] lg:p-[30px] invisible
elements-column gap-[20px] absolute top-[50%] left-[50%] translate-[-50%] w-[90%]  
`;
const form_style = ` gap-[20px]`;
const log_in_style = `text-secondary hover:underline cursor-pointer decoration-secondary`;
export default Sing_up_form;
