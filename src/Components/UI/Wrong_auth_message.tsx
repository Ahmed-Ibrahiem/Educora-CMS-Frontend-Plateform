type propsType = {
  message: string;
  style?: string;
};

const Wrong_auth_message = ({ message, style }: propsType) => {
  return (
    <p className={`text-[12px] text-red-500 w-full ${style && style}`}>
      {message}
    </p>
  );
};

export default Wrong_auth_message;
