"use client";

import { experienceType } from "@/database/database";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export default async function VerticalTimelineComponent({
  jobs,
}: {
  jobs: experienceType[];
}) {
  return (
    <VerticalTimeline lineColor="#884ab2">
      {jobs.map((job, index) => (
        <VerticalTimelineElement
          key={index}
          date={`${job.startDate} - ${job.endDate}`}
          iconStyle={{ background: "white", color: "#fff" }}
          contentStyle={{ backgroundColor: "#F2F9FA" }}
          icon={
            <div className="rounded-full w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={job.companyImg}
                alt={`${job.company} logo`}
                className="rounded-full object-contain"
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">{job.role}</h3>
          <h4 className="vertical-timeline-element-subtitle">{job.company}</h4>
          <p>{job.shortDescription}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
