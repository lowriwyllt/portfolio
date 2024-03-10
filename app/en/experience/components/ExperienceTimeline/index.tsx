"use client";

import { experienceType, fetchExperience } from "@/database/database";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const ExperienceTimeline = async () => {
  const jobs: experienceType[] = await fetchExperience();

  const sortedJobs = jobs.sort((a, b) => {
    const [monthA, yearA] = a.startDate.split("/");
    const [monthB, yearB] = b.startDate.split("/");
    const dateA = new Date(parseInt(yearA), parseInt(monthA) - 1);
    const dateB = new Date(parseInt(yearB), parseInt(monthB) - 1);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <VerticalTimeline lineColor="#884ab2">
      {sortedJobs.map((job, index) => (
        <VerticalTimelineElement
          key={index}
          date={`${job.startDate} - ${job.endDate}`}
          iconStyle={{ background: "#471ca8", color: "#fff" }}
          contentStyle={{ backgroundColor: "#F2F9FA" }}
        >
          <h3 className="vertical-timeline-element-title">{job.role}</h3>
          <h4 className="vertical-timeline-element-subtitle">{job.company}</h4>
          <p>{job.shortDescription}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
