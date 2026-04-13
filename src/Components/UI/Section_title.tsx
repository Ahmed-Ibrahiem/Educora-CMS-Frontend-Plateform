import { Format_highlighted_title } from "../../Utils/Componets_utils";

type propsType = {
  label?: string,
  label_style?: string,
  title?: string,
  title_style?: string,
  highight_word: string,
  desc?: string,
  desc_style?: string,
}

const Section_title = ({
  label,
  label_style,
  title,
  title_style,
  highight_word,
  desc,
  desc_style,
}: propsType) => {
  return (
    <>
      <div
        className={`title elements-center-row w-fit text-[14px] md:text-[25px] text-secondary tracking-[4px] md:tracking-[6px] 
            font-bold decoration-secondary underline ${label_style} `}
      >
        <i className="fa-solid fa-book-open-reader"></i>
        <h3>{label}</h3>
      </div>
      {title && (
        <h1
          className={`text-[30px] md:text-[45px] font-extrabold text-dark ${title_style}`}
        >
          {Format_highlighted_title(highight_word, title)}
        </h1>
      )}
      {desc && <p className={`text-[16px] text-gray ${desc_style}`}>{desc}</p>}
    </>
  );
};

export default Section_title;
