type contactType = {
  img: string,
  title: string,
  location: string,
  url: string,
  phone: string,
  email_address: string,
  email_text: string,
}

const Contact_area = () => {
  const contact_data: contactType[] = [
    {
      img: "",
      title: "Customer Support",
      location: "Al-Dababiah, Berket Al-Sab', Menoufia",
      url: "https://maps.app.goo.gl/3bnTj9wEKpxpkKyo9",
      phone: "+20 010 1156 0550 ",
      email_address: "mailto:ahmedebrihem935@gmail.com",
      email_text: "ahmedebrihem935@gmail.com",
    },
    {
      img: "",
      title: "Main Office Address",
      location: "Ashmoun City, Ashmoun , Menoufia 6030548",
      url: "https://maps.app.goo.gl/FwX5cGsTs57yxVBS8",
      phone: "+20 010 5156 7580 ",
      email_address: "https://www.menofia.edu.eg/edv/Home/ar",
      email_text: "www.menofia.edu.eg",
    },
    {
      img: "",
      title: "Contact Address",
      location: "Ashmoun City, Ashmoun , Menoufia 6030548",
      url: "https://maps.app.goo.gl/FwX5cGsTs57yxVBS8",
      phone: "+20 010 5156 7580 ",
      email_address: "https://www.menofia.edu.eg/edv/Home/ar",
      email_text: "www.menofia.edu.eg",
    },
  ];



  return (
    <div className="py-[100px]">
      <div
        className={`container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${contact_data.length} gap-[30px] justify-center`}
      >
        {contact_data.map((section, index) => {
          return (
            <div
              key={index}
              className="elements-center-column gap-[20px] bg-white p-[20px] rounded-[20px] card-shadow relative
                    before-sitting before:bg-primary before:h-[20px]! contact-card-shap  "
            >
              <h1 className="text-[22px] text-primary font-bold">
                {section.title}
              </h1>
              <a href={section.url} className="elements-row gap-[10px]">
                <i className="fa-solid fa-location-dot text-[20px] text-primary "></i>
                <p className="line-clamp-1">{section.location}</p>
              </a>
              <a
                href={`tel:${section.phone}`}
                className="elements-row gap-[10px]"
              >
                <i className="fa-solid fa-phone text-[20px] text-primary"></i>
                <p className="line-clamp-1">{section.phone}</p>
              </a>
              <a
                href={`${section.email_address}`}
                className="elements-row gap-[10px]"
              >
                <i className="fa-solid fa-envelope text-[20px] text-primary "></i>
                <p className="line-clamp-1">{section.email_text}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact_area;
