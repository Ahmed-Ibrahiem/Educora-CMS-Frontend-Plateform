import { useState } from "react";

type propsType = {
  image?: string, name?: string, imStyle?: string, iStyel?: string
}

const MainImageStyle = ({ image, name, imStyle, iStyel }: propsType) => {
  const [is_error, set_is_error] = useState(false);

  return (
    <div className={img_box}>
      {image && !is_error ? (
        <img
          className={`${image_style} ${imStyle ? imStyle : ""}`}
          src={image}
          loading="lazy"
          alt={`${name} image`}
          onError={() => set_is_error(true)}
        />
      ) : (
        <i
          className={`fa-solid fa-user p-2.5 text-gray ${iStyel && iStyel}`}
        ></i>
      )}
    </div>
  );
};
const img_box = `img_box border-dashed border-2 border-secondary rounded-[50%] aspect-square overflow-hidden`;

const image_style = `
 p-2.5 object-cover rounded-[50%] 
`;

export default MainImageStyle;
