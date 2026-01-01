import Image from "next/image";

const programsData = [
  {
    title: "Outdoor Adventures",
    description:
      "Camping, hiking, rock climbing, and wilderness survival skills that build confidence and self-reliance.",
    image: "/images/aboutpage/programs/image1.webp",
  },
  {
    title: "Leadership Training",
    description:
      "Programs designed to develop leadership skills, decision-making abilities, and team collaboration.",
    image: "/images/aboutpage/programs/image2.webp",
  },
  {
    title: "Community Service",
    description:
      "Opportunities to give back to the community while learning the importance of civic responsibility.",
    image: "/images/aboutpage/programs/image3.webp",
  },
];

const Programs = () => {
  return (
    <section className="w-full bg-white py-25 lg:py-38 ">
      <div className="container-box">
        <div className="mb-16 lg:mb-25">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-darkest">
            Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <div
              key={index}
              className="border w-full max-w-[450px] mx-auto border-yellow-dark rounded-[30px] p-4 flex flex-col h-full"
            >
              <div className="relative w-full  h-[280px] mb-4 rounded-[30px] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="h-full w-full"
                />
              </div>
              <h3 className="text-xl pl-2.5 lg:text-2xl font-medium text-yellow-darkest mb-3">
                {program.title}
              </h3>
              <p className="text-yellow-darkest pl-2.5 text-base lg:text-lg font-normal mb-2">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
