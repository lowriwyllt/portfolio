import { Metadata, NextPage } from "next";
import ExperiencePageComponent from "@/app/components/Experience";

export const metadata: Metadata = {
  title: "Profiad - Lowri Roberts",
  description:
    "Cymerwch olwg ar brofiad proffesiynol a chymwysterau Lowri Roberts.",
};

const Profiad: NextPage = () => {
  return <ExperiencePageComponent lang="cy" />;
};

export default Profiad;
