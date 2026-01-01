import Button from "@/components/ui/button";
import Image from "next/image";

const PartOfJourney = () => {
  return (
    <section className="w-full pb-20 lg:pb-35">
      <div className="container-box">
        <p className="text-yellow-darkest text-sm md:text-base font-light lg:mb-5 mb-2">
          Registration
        </p>
        <h6 className="text-2xl md:text-4xl font-semibold text-yellow-darkest mb-10 md:mb-16">
          Be Part of the Journey
        </h6>

        <div className="relative w-full h-[400px] md:h-[432px] rounded-[30px] overflow-hidden flex items-center justify-center text-center px-4">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/homepage/partOfJourney/hero.webp"
              alt="Part of Journey Background"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(8, 8, 8, 0.7) 7%, rgba(102, 102, 102, 0.6) 100%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-[50px] font-semibold text-yellow-lighter mb-8 md:mb-11">
              Register for Our Programs
            </h3>
            <p className="text-xl md:text-[30px] text-yellow-light mb-8 md:mb-11">
              Take the first step into adventure and leadership.
            </p>
            <Button className="">Continue to register</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartOfJourney;
