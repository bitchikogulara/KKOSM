import React from "react";

interface DonationCardProps {
  icon: React.ReactNode;
  amount: number;
  description: string;
  isPopular?: boolean;
}

const DonationCard = ({
  icon,
  amount,
  description,
  isPopular,
}: DonationCardProps) => {
  return (
    <div
      className={`relative flex flex-col items-center text-center py-8 px-12 rounded-[30px] border transition-transform hover:scale-105 duration-300  ${
        isPopular
          ? "border-[#DE841B] bg-[#FDDEB9] shadow-md"
          : "border-[#F7931E] shadow-sm bg-[#FEF4E9]"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-4 bg-[#D97706] text-white text-base font-medium px-2.5 py-1.5 rounded-[10px]">
          Popular
        </span>
      )}
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-bold text-yellow-darkest mb-7">${amount}</h3>
      <p className="text-yellow-darkest text-xl">{description}</p>
    </div>
  );
};

export default DonationCard;
