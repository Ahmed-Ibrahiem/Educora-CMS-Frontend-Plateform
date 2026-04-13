import type { BadgesType } from "../../../types/courses.type";


const Badges = ({ data }: { data: BadgesType }) => {
  return (
    <div className={`elements-row gap-[20px] flex-wrap `}>
      {data.best_seller && (
        <span className={`${span_className} text-dark!`}>Best Seller</span>
      )}
      {data.popular && (
        <span className={`${span_className} bg-our-red!`}>Popular</span>
      )}
      {data.new && (
        <span className={`${span_className} bg-our-blue!`}>new</span>
      )}
    </div>
  );
};

const span_className = `
text-white capitalize bg-our-green p-[5px_15px] rounded-[50px] font-mediem
text-[14px] md:text-[16px]`;

export default Badges;
