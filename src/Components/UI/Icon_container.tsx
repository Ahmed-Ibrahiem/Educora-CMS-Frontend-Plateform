type propsType = {
  container_style?: string;
  icon_style?: string;
  icon?: string;
};
const Icon_container = ({ container_style, icon_style, icon }: propsType) => {
  return (
    <div
      className={`icon elements-center-row max-w-17.5 min-w-17.5 max-h-17.5 min-h-17.5 rounded-[50%] icon-shadow-reverse bg-secondary ${container_style}`}
    >
      <img src={icon} className={`max-w-[50%] ${icon_style}`}></img>
    </div>
  );
};

export default Icon_container;
