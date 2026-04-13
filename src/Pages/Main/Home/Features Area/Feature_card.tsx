type featureType = {
  id: number,
  icon: string,
  title: string,
  description:
  string,
}
const Feature_card = ({ feature }: { feature: featureType }) => {
  return (
    <div
      className="feature_card group flex flex-col gap-[15px] p-[20px] items-start bg-white rounded-[10px] shadow-[var(--box-shadow)]
              main-border-radius"
    >
      <div className="top elements-justify-between w-full  gap-[20px]">
        <div
          className="icon elements-center-row w-[80px] min-w-[80px] h-[80px] min-h-[80px] rounded-[50%] bg-primary
            icon-shadow group-hover:rotate-y-[360deg] transition-all duration-500!"
        >
          <img src={feature.icon} className="w-[60%] text-[25px] "></img>
        </div>
        <span className="font-extrabold text-[50px] text-strock-style ">
          0{feature.id}
        </span>
      </div>
      <h3 className="text-[22px] font-bold">{feature.title}</h3>
      <p className="desc leading-[1.8]">{feature.description}</p>
    </div>
  );
};

export default Feature_card;
