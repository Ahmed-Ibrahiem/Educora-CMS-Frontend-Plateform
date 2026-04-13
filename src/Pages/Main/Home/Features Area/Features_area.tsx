import { Features_data } from "../../../../assets/Assets";
import Feature_card from "./Feature_card";

const Features_area = () => {
  return (
    <div className="features_area p-[20px] flex justify-end  mt-[-50px] md:mt-[-120px] z-5 relative">
      <div className="features grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[15px] w-[100%] xl:w-[80%]   ">
        {Features_data.map((feature) => {
          return <Feature_card key={feature.id} feature={feature} />;
        })}
      </div>
    </div>
  );
};

export default Features_area;
