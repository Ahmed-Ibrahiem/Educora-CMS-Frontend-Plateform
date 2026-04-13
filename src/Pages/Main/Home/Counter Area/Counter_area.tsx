import { counter_data } from "../../../../assets/Assets.js";
import bg from "../../../../assets/slider-1.jpg";
import { useCounterOnScroll } from "../../../../Utils/Componets_utils.js";

const Counter_area = () => {
  return (
    <section
      className={`py-[100px] bg-cover bg-no-repeat bg-center relative before-sitting before:bg-primary before:opacity-[0.55]`}
      style={{ backgroundImage: `url(${bg})`, backgroundAttachment: "fixed" }}
    >
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-[20px] relative z-[5] ">
        {counter_data.map((data) => {
          const { count, ref } = useCounterOnScroll(data.count, 2000);

          return (
            <div
              key={data.id}
              className="card elements-center-column gap-[10px] md:gap-[20px] group text-white "
            >
              <div
                className="box w-[70px] md:w-[100px] h-[70px] md:h-[100px] bg-secondary elements-center-row custom-border before:z-[-1] before:duration-300 before:transition-all
               relative before-sitting before:rounded-[var(--custom-border)] before:border-[3px] before:border-white before:top-[10px]! before:left-[10px]!
               group-hover:before:top-0! group-hover:before:left-0! "
              >
                <img src={data.icon} className="w-[60%] " alt={data.title} />
              </div>
              <span
                className="counter text-[30px] md:text-[50px] font-extrabold "
                ref={ref}
              >
                {count}
              </span>
              <p className="title text-[16px] md:text-[18px] font-bold">
                {data.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Counter_area;
