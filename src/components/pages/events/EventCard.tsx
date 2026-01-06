import React from "react";
import { themeConfigs } from "./constants";
import { motion } from "motion/react";
import { EventCardProps, TimelineItem, EventSection } from "./types";
import PersonGroup from "@/components/icons/PersonGroup";
import Search from "@/components/icons/Search";
import DollerBag from "@/components/icons/DollerBag";

const EventCardHeader: React.FC<EventCardProps> = ({
  theme,
  category,
  date,
  title,
  location,
  ageGroup,
  price,
}) => {
  const config = themeConfigs[theme];
  const iconColor = theme === "gold" ? undefined : "#e6f4ec";

  return (
    <div
      className={`bg-linear-to-r ${config.headerGradient} px-6 md:px-8 lg:px-10 py-6 md:py-7 lg:py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6`}
    >
      <div className="flex flex-col gap-5 lg:gap-6">
        <div className="flex gap-3 lg:gap-5 flex-wrap">
          <div
            className={`border ${theme === "gold" ? "border-yellow-dark" : "border-green-light"
              } rounded-[10px] h-[30px] px-2.5 py-1.5 flex items-center justify-center`}
          >
            <p className={`font-medium text-sm lg:text-base ${config.tagText}`}>
              {category}
            </p>
          </div>
          <div className="h-[30px] px-2.5 py-1.5 flex items-center justify-center">
            <p className={`font-medium text-sm lg:text-base ${config.tagText}`}>
              {date}
            </p>
          </div>
        </div>

        <div className="w-full">
          <p
            className={`font-medium text-xl md:text-2xl ${config.tagText} mb-4 lg:mb-6`}
          >
            {title}
          </p>

          <div className="flex gap-3 lg:gap-4 items-center flex-wrap">
            <div className="flex gap-1.5 items-center">
              <Search color={iconColor} />
              <p
                className={`font-normal text-sm lg:text-base ${config.tagText}`}
              >
                {location}
              </p>
            </div>

            <div className="flex gap-1.5 items-center">
              <PersonGroup color={iconColor} />
              <p
                className={`font-normal text-sm lg:text-base ${config.tagText}`}
              >
                {ageGroup}
              </p>
            </div>

            <div className="flex gap-1.5 items-center">
              <DollerBag color={iconColor} />
              <p
                className={`font-normal text-sm lg:text-base ${config.tagText}`}
              >
                {price}
              </p>
            </div>
          </div>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${config.buttonBg} ${config.buttonText} px-8 lg:px-12.5 py-2 lg:py-2.5 rounded-[10px] font-medium text-base lg:text-lg whitespace-nowrap self-start lg:self-auto hover:opacity-90 transition-opacity cursor-pointer`}
      >
        Register now
      </motion.button>
    </div>
  );
};

const RedLayout: React.FC<{
  sections: EventSection[];
  specialDescription: string;
  timeline?: TimelineItem[];
  showTimeline?: boolean;
  timelineTitle?: string;
  config: any;
}> = ({ sections, specialDescription, timeline = [], showTimeline = true, timelineTitle, config }) => {
  return (
    <div className="border-t border-gray-200 px-6 lg:px-12 py-8 lg:py-12 flex flex-col gap-8 lg:gap-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
        <div className="flex-1 max-w-[660px] flex flex-col gap-4 lg:gap-5">
          <div className="flex flex-col gap-4 lg:gap-5">
            <p
              className={`font-semibold text-xl lg:text-2xl ${config.headingText}`}
            >
              Event Highlights
            </p>
            <div
              className={`font-normal text-base lg:text-lg ${config.descText} space-y-3 leading-relaxed`}
            >
              {specialDescription.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {showTimeline && timeline.length > 0 && (
          <div
            className={`bg-red-light rounded-3xl p-6 lg:p-7.5 shadow-md shrink-0 w-full lg:w-[380px] xl:w-[480px]`}
          >
            <p
              className={`font-semibold text-xl lg:text-2xl ${config.headingText} mb-4 lg:mb-5`}
            >
              {timelineTitle || "Schedule"}
            </p>

            <div className="flex flex-col gap-3 lg:gap-5">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-4 lg:gap-8 items-baseline">
                  <p
                    className={`font-medium text-sm lg:text-base shrink-0 w-20 ${config.headingText}`}
                  >
                    {item.time}
                  </p>
                  <div className="flex flex-col gap-1">
                    <p
                      className={`font-medium text-base lg:text-lg ${config.headingText}`}
                    >
                      {item.title}
                    </p>
                    {item.description && (
                      <p
                        className={`font-normal text-sm lg:text-base ${config.specialText}`}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="h-[3px] bg-[#C1272D]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {sections.map((section, idx) => {
          const isMeals = section.title.toLowerCase().includes("meal") || section.title.toLowerCase().includes("food");
          const boxClass = isMeals
            ? `${config.boxBg} rounded-3xl p-6 lg:p-8 shadow-md`
            : "bg-red-light rounded-3xl p-6 lg:p-8 shadow-md";
          const titleClass = isMeals
            ? "text-white"
            : config.headingText;
          const textClass = isMeals
            ? "text-white"
            : config.specialText;

          return (
            <div key={idx} className={boxClass}>
              <p
                className={`font-semibold text-xl lg:text-2xl ${titleClass} mb-4 lg:mb-6`}
              >
                {section.title}
              </p>
              {section.items ? (
                <ul
                  className={`font-normal text-base lg:text-lg ${textClass} space-y-2`}
                >
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="mr-1 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className={`font-normal text-base lg:text-lg ${textClass}`}
                >
                  {section.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const GreenLayout: React.FC<{
  sections: EventSection[];
  specialDescription: string;
  timeline: TimelineItem[];
  showTimeline?: boolean;
  timelineTitle?: string;
  config: any;
}> = ({ sections, specialDescription, timeline, showTimeline = true, timelineTitle, config }) => {
  return (
    <>
      <div className="px-6 lg:px-12 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
        <div className="flex-1 max-w-[660px] flex flex-col gap-4 lg:gap-5">
          <p
            className={`font-semibold text-xl lg:text-2xl ${config.headingText}`}
          >
            What makes this special
          </p>
          <div
            className={`font-normal text-base lg:text-lg ${config.descText} space-y-3 leading-relaxed`}
          >
            {specialDescription.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {showTimeline && timeline.length > 0 && (
          <div
            className={`${config.boxBg} ${config.boxBorder ? `border-2 ${config.boxBorder}` : ""
              } rounded-3xl p-6 lg:p-7.5 shadow-md shrink-0 w-full lg:w-[380px] xl:w-[480px]`}
          >
            <p
              className={`font-semibold text-xl lg:text-2xl ${config.headingText} mb-4 lg:mb-5`}
            >
              {timelineTitle || "Day Schedule"}
            </p>

            <div className="flex flex-col gap-3 lg:gap-5">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-4 lg:gap-8 items-baseline">
                  <p
                    className={`font-medium text-sm lg:text-base shrink-0 w-20 ${config.headingText}`}
                  >
                    {item.time}
                  </p>
                  <div className="flex flex-col gap-1">
                    <p
                      className={`font-medium text-base lg:text-lg ${config.headingText}`}
                    >
                      {item.title}
                    </p>
                    {item.description && (
                      <p
                        className={`font-normal text-sm lg:text-base ${config.specialText}`}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mx-6 lg:mx-12 h-[3px] bg-[#00DA81] w-[calc(100%-3rem)] lg:w-[calc(100%-6rem)]" />

      <div className="px-6 lg:px-12 py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {sections.map((section, idx) => {
          const isMeals = section.title.toLowerCase().includes("meals");
          const boxStyle = isMeals
            ? "bg-[#01DA81] text-white rounded-[30px]"
            : "bg-[#effdf4] text-green-normal rounded-3xl";

          return (
            <div key={idx} className={`${boxStyle} p-6 lg:p-8 shadow-md`}>
              <h3
                className={`font-semibold text-xl lg:text-2xl mb-4 lg:mb-6 ${isMeals ? "text-white" : config.headingText
                  }`}
              >
                {section.title}
              </h3>
              {section.items ? (
                <ul
                  className={`font-normal text-base lg:text-lg space-y-2 ${isMeals ? "text-white" : config.specialText
                    }`}
                >
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="mr-1 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className={`font-normal text-base lg:text-lg ${isMeals ? "text-white" : config.specialText
                    }`}
                >
                  {section.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

const GoldLayout: React.FC<{
  sections: EventSection[];
  specialDescription: string;
  timeline: TimelineItem[];
  showTimeline?: boolean;
  timelineTitle?: string;
  config: any;
}> = ({ sections, specialDescription, timeline, showTimeline = true, timelineTitle, config }) => {
  return (
    <>
      <div className="px-6 lg:px-12 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
        <div className="flex-1 max-w-[660px] flex flex-col gap-4 lg:gap-5">
          <p
            className={`font-semibold text-xl lg:text-2xl ${config.headingText}`}
          >
            What makes this special
          </p>
          <div
            className={`font-normal text-base lg:text-lg ${config.descText} space-y-3 leading-relaxed`}
          >
            {specialDescription.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {showTimeline && timeline.length > 0 && (
          <div
            className={`${config.boxBg} ${config.boxBorder ? `border-2 ${config.boxBorder}` : ""
              } rounded-3xl p-6 lg:p-7.5 shadow-md shrink-0 w-full lg:w-[380px] xl:w-[480px]`}
          >
            <p
              className={`font-semibold text-xl lg:text-2xl ${config.headingText} mb-4 lg:mb-5`}
            >
              {timelineTitle || "Adventure timeline"}
            </p>

            <div className="flex flex-col gap-3 lg:gap-3.75">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-4 lg:gap-5.75 items-start">
                  <div
                    className={`${config.timelineBg} border ${config.timelineBorder} rounded-[10px] h-[30px] px-2.5 py-1.5 flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    <p
                      className={`font-medium text-sm lg:text-base ${config.timelineText}`}
                    >
                      {item.time}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p
                      className={`font-medium text-base lg:text-lg ${config.headingText}`}
                    >
                      {item.title}
                    </p>
                    {item.description && (
                      <p
                        className={`font-normal text-sm lg:text-base ${config.specialText}`}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mx-6 lg:mx-12 h-[3px] bg-[#F3C78B] w-[calc(100%-3rem)] lg:w-[calc(100%-6rem)]" />

      <div className="px-6 lg:px-12 py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-14">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`${config.boxBg} border border-transparent hover:border-yellow-dark hover:bg-[#ffe4bc] transition-all duration-300 rounded-3xl p-6 lg:p-8 shadow-md flex flex-col`}
          >
            <h3
              className={`font-semibold text-xl lg:text-2xl ${config.headingText} mb-4 lg:mb-5`}
            >
              {section.title}
            </h3>
            {section.items ? (
              <ul
                className={`font-normal text-base lg:text-lg ${config.specialText} space-y-2`}
              >
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="mr-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p
                className={`font-normal text-base lg:text-lg ${config.specialText}`}
              >
                {section.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const EventCard: React.FC<EventCardProps> = (props) => {
  const { theme, sections, specialDescription, timeline, showTimeline = true, timelineTitle = "Schedule" } = props;
  const config = themeConfigs[theme];

  return (
    <div
      className={`bg-white border ${config.cardBorder} rounded-3xl shadow-md overflow-hidden`}
    >
      <EventCardHeader {...props} />
      {theme === "red" && (
        <RedLayout
          sections={sections}
          specialDescription={specialDescription}
          timeline={timeline}
          showTimeline={showTimeline}
          timelineTitle={timelineTitle}
          config={config}
        />
      )}
      {theme === "green" && (
        <GreenLayout
          sections={sections}
          specialDescription={specialDescription}
          timeline={timeline}
          showTimeline={showTimeline}
          timelineTitle={timelineTitle}
          config={config}
        />
      )}
      {theme === "gold" && (
        <GoldLayout
          sections={sections}
          specialDescription={specialDescription}
          timeline={timeline}
          showTimeline={showTimeline}
          timelineTitle={timelineTitle}
          config={config}
        />
      )}
    </div>
  );
};

export default EventCard;
