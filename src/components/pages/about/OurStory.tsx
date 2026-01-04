import Image from "next/image";

const OurStory = () => {
  return (
    <section className="w-full bg-white pt-16 lg:pt-25 pb-25 lg:pb-[210px] overflow-hidden">
      <div className="container-box">
        <div className="mb-16 lg:mb-25">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-darkest relative inline-block">
            Our story
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col justify-center space-y-15 lg:space-y-28">
            <div className="">
              <h3 className="text-2xl font-semibold text-yellow-darkest mb-5">
                About us
              </h3>
              <p className="text-yellow-darkest max-w-[659px] text-base font-normal font-outfit lg:text-lg ">
                Exploring nature builds courage, teamwork, and unforgettable
                memories.Exploring nature builds courage, teamwork, and
                unforgettable memories.Exploring nature builds courage,
                teamwork, and unforgettable memories.Exploring nature builds
                courage, teamwork, and unforgettable memories.Exploring nature
                builds courage, teamwork, and unforgettable memories.Exploring
                nature builds courage, teamwork, and unforgettable
                memories.memories.Exploring nature builds courage, teamwork, and
                unforgettable memories.Exploring nature builds courage,
                teamwork, and unforgettable memories.
              </p>
              <p className="text-yellow-darkest max-w-[659px] text-base font-normal font-outfit lg:text-lg ">
                Exploring nature builds courage, teamwork, and unforgettable
                memories.Exploring nature builds courage, teamwork, and
                unforgettable memories.Exploring nature builds courage,
                teamwork, and unforgettable memories.Exploring nature builds
                courage, teamwork, and unforgettable memories.Exploring nature
                builds courage, teamwork, and unforgettable memories.
              </p>
            </div>

            <div className="max-w-[520px]">
              <h3 className="text-2xl font-semibold text-yellow-darkest mb-5">
                Basic info about program
              </h3>
              <p className="text-yellow-darkest text-base lg:text-lg">
                Exploring nature builds courage, teamwork, and unforgettable
                memories.Exploring nature builds courage, teamwork, and
                unforgettable memories.Exploring nature builds courage,
                teamwork, Exploring nature builds courage, teamwork, and
                unforgettable
              </p>
            </div>
          </div>

          <div className="relative h-[400px] sm:h-[500px] lg:h-full w-full max-w-[500px] lg:max-w-none mx-auto mt-8 lg:mt-0">
            <div className="absolute top-0 right-0 w-[70%] h-[65%] md:w-[65%] md:h-[70%] lg:w-[518px] lg:h-[736px] z-0">
              <Image
                src="/images/aboutpage/storysection/mask-image.webp"
                alt="Scouts scarves"
                fill
                className="object-cover rounded-[20px] lg:rounded-[30px]"
              />
            </div>

            <div className="absolute bottom-0 left-0 lg:-bottom-24 lg:-left-16 w-[60%] h-[50%] md:w-[55%] md:h-[55%] lg:w-[70%] lg:h-[45%] z-10">
              <div className="relative w-full h-full rounded-[20px] lg:rounded-[30px] overflow-hidden border-8 lg:border-12 border-white">
                <Image
                  src="/images/aboutpage/storysection/image1.webp"
                  alt="Camping tents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
