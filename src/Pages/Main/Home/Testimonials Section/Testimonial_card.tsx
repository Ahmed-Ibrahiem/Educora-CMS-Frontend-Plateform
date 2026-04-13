import MainImageStyle from "../../../../Components/UI/MainImageStyle";
import { useRender_stars_regular } from "../../../../Utils/Componets_utils";

type testimonialType = {
  id: number;
  rating: number;
  score: number;
  feedback: string;
  student: {
    id: number;
    name: string;
    role: string;
    image: string;
  };
  course_title: string;
};

const Testimonial_card = ({
  testimoial_data,
}: {
  testimoial_data: testimonialType;
}) => {
  return (
    <div className={card_style}>
      <div className="stars text-secondary elements-row gap-[5px] text-[18px]">
        {useRender_stars_regular(testimoial_data.rating)}
      </div>
      <p className="text-gray leading-[1.6] font-medium italic line-clamp-3">
        {testimoial_data.feedback}
      </p>

      <div className="footer elements-row gap-[10px]">
        <MainImageStyle
          iStyel="text-[32px]"
          imStyle="w-[80px]! h-[80px]! p-[5px]!"
          image={testimoial_data.student.image}
          name={`${testimoial_data.student.name} image`}
        />
        <div className="info text-[18px] font-medium ">
          <h3 className="text-dark">{testimoial_data.student.name}</h3>
          <p className="text-secondary">{testimoial_data.student.role}</p>
        </div>
      </div>
    </div>
  );
};

const card_style = `
text-[16px] text-white bg-white rounded-[40px_40px_40px_0] border-b-[5px] border-b-secondary 
p-[40px_20px] elements-column gap-[20px]  relative quote_end after:top-[-10px]! after:right-[-10px]!
`;

export default Testimonial_card;
