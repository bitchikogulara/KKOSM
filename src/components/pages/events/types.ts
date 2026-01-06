export type ThemeType = "gold" | "green" | "red";

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

export interface EventSection {
  title: string;
  items?: string[];
  description?: string;
}

export interface EventCardProps {
  theme: ThemeType;
  category: string;
  date: string;
  title: string;
  location: string;
  ageGroup: string;
  price: string;
  specialDescription: string;
  timeline: TimelineItem[];
  sections: EventSection[];
  showTimeline?: boolean;
  timelineTitle?: string;
}
