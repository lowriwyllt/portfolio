"use client";

import { experienceType } from "@/database/database";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export default async function VerticalTimelineComponent({
  jobs,
  language = "english",
}: {
  jobs: experienceType[];
  language?: string;
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
                alt={
                  language === "english"
                    ? `${job.company} logo`
                    : `logo ${job.cwmni}`
                }
                className="rounded-full object-contain"
              />
            </div>
          }
        >
          <h2 className="vertical-timeline-element-title">
            {language === "english" ? job.role : job.rol}
          </h2>
          <h3 className="vertical-timeline-element-subtitle">
            {language === "english" ? job.company : job.cwmni}
          </h3>
          <p>
            {language === "english" ? job.shortDescription : job.disgrifiadByr}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
