import "react-vertical-timeline-component/style.min.css";
import VerticalTimelineComponent from "./VerticalTimelineComponent";
import { EXPERIENCE } from "@/app/data/experience";

export const ExperienceTimeline = async ({
  language = "english",
}: {
  language?: string;
}) => {
  const jobs = EXPERIENCE;

  const sortedJobs = jobs.sort((a, b) => {
    const [monthA, yearA] = a.startDate.split("/");
    const [monthB, yearB] = b.startDate.split("/");
    const dateA = new Date(parseInt(yearA), parseInt(monthA) - 1);
    const dateB = new Date(parseInt(yearB), parseInt(monthB) - 1);
    return dateB.getTime() - dateA.getTime();
  });

  return <VerticalTimelineComponent jobs={sortedJobs} language={language} />;
};
