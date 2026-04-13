import { Link } from "react-router-dom";
import { socialMedia } from "../../../../assets/Assets";

type teacherType = {
  id: number,
  teacher_image: string,
  teacher_name: string,
  teacher_position: string,
  social_media: {
    facebook: string,
    whatsapp: string,
    linkedin: string,
    youtube: string,
  },
  teacher_page: string,
}
const Teacher_card = ({ teacher_data }: { teacher_data: teacherType }) => {
  return (
    <div
      className="card-shadow group p-[20px] main-border-radius relative duration-700!
               bg-white elements-column gap-[5px] lg:hover:bottom-[20px] bottom-0 overflow-hidden"
    >
      <div className="img_box card-border-radius h-[300px] overflow-hidden  ">
        <img
          src={teacher_data.teacher_image}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <h3 className="text-[20px] font-bold text-dark">
        {teacher_data.teacher_name}
      </h3>
      <p className="text-[16px] tracking-[2px] text-primary">
        {teacher_data.teacher_position}
      </p>
      {/* Teacher page link */}
      <Link
        to={teacher_data.teacher_page}
        className="absolute right-[20px] bottom-[20px] lg:right-[-5px] lg:bottom-0 w-[40px] h-[40px] lg:group-hover:bg-secondary
         rounded-[50%] bg-primary text-[20px] text-white elements-center-row duration-700!
         lg:group-hover:right-[10px] lg:group-hover:bottom-[10px]"
      >
        <i className="fa-solid fa-share-nodes"></i>
      </Link>
      <div
        className="teacher-social-madia elements-center-column gap-[10px] absolute opacity-100 lg:opacity-0
                   top-[50px] right-[30px] lg:right-[0] duration-700! group-hover:right-[30px] group-hover:opacity-100 "
      >
        {/* Socail media links */}
        {Object.entries(teacher_data.social_media).map(
          ([key, value], index) => {
            const typedKey = key as keyof typeof socialMedia
            return (
              <Link
                className="w-[40px] h-[40px] rounded-[100px_100px_100px_0] bg-secondary text-[16px]
                               text-white elements-center-row hover:bg-primary"
                to={value}
                key={index}
              >
                <i className={socialMedia[typedKey].icon}></i>
              </Link>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Teacher_card;
