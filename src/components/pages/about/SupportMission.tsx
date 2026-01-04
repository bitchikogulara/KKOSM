import Button from "@/components/ui/button";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h4 className="text-3xl font-semibold text-yellow-darkest mb-1">
        {value}
      </h4>
      <p className="text-yellow-darkest text-lg md:text-xl font-medium">
        {label}
      </p>
    </div>
  );
};

const SupportMission = () => {
  return (
    <section className="w-full bg-[#FEF4E9] py-12.5">
      <div className="container-box flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-yellow-darkest mb-4 lg:mb-10 text-center">
          Support our mission
        </h2>

        <p className="text-center text-yellow-dark font-medium text-lg md:text-[22px] max-w-[800px] mx-auto mb-8 lg:mb-18">
          One-time or monthly donations accepted. All contributions are
          tax-deductible
        </p>

        <div className="flex justify-center mb-8 lg:mb-25">
          <Button>Make a donation today</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-20 lg:gap-[270px] mx-auto">
          <StatItem value="250+" label="Youth Served Annually" />
          <StatItem value="50+" label="Volunteer Leaders" />
          <StatItem value="25" label="Years in community" />
        </div>
      </div>
    </section>
  );
};

export default SupportMission;
