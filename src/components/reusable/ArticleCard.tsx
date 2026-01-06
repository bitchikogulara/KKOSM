import Image from "next/image";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const ArticleCard = ({
  title,
  description,
  image,
  className = "",
}: ArticleCardProps) => {
  return (
    <div
      className={`border w-full max-w-[450px] mx-auto border-yellow-dark rounded-[30px] p-4 flex flex-col h-[530px] ${className}`}
    >
      <div className="relative w-full h-[280px] mb-4 overflow-hidden shrink-0">
        <Image src={image} alt={title} fill className="h-full w-full object-cover rounded-[20px]" />
      </div>
      <h3 className="text-xl pl-2.5 lg:text-2xl font-medium text-yellow-darkest mb-3">
        {title}
      </h3>
      <p className="text-yellow-darkest pl-2.5 text-base lg:text-lg font-normal mb-2">
        {description}
      </p>
    </div>
  );
};

export default ArticleCard;
