import { Metadata, NextPage } from "next";
import ExperiencePageComponent from "@/app/components/Experience";

export const metadata: Metadata = {
  title: "Experience - Lowri Roberts",
  description:
    "Explore Lowri Roberts' professional experience and qualifications.",
};

const Experience: NextPage = () => {
  return <ExperiencePageComponent />;
};

export default Experience;
