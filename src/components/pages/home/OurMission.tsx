import Button from "@/components/ui/button";
import TentIcon from "@/components/icons/TentIcon";
import LightningIcon from "@/components/icons/LightningIcon";
import TargetIcon from "@/components/icons/TargetIcon";
import DonationCard from "@/components/reuseable/DonationCard";

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

// --- Main Component ---

const OurMission = () => {
  return (
    <section className="w-full bg-[#FFFBF7] pt-14 pb-20 lg:pb-35">
      <div className="container-box">
        <h6 className="text-2xl md:text-4xl font-semibold text-yellow-darkest mb-12 md:mb-20">
          Support our mission
        </h6>

        {/* Donation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-7xl mx-auto">
          <DonationCard
            icon={<TentIcon />}
            amount={25}
            description="Provides camping gear for one scout on their first outdoor adventure"
          />
          <DonationCard
            icon={<LightningIcon />}
            amount={50}
            description="Provides camping gear for one scout on their first outdoor adventure"
            isPopular
          />
          <DonationCard
            icon={<TargetIcon />}
            amount={100}
            description="Provides camping gear for one scout on their first outdoor adventure"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          <Button>Make a donation today</Button>
        </div>

        {/* Footer Text */}
        <p className="text-center text-yellow-dark font-medium text-[22px] max-w-[800px] mx-auto">
          One-time or monthly donations accepted. All contributions are
          tax-deductible.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[270px] mx-auto pt-16 md:pt-20">
          <StatItem value="250+" label="Youth Served Annually" />
          <StatItem value="50+" label="Volunteer Leaders" />
          <StatItem value="25" label="Years in community" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
