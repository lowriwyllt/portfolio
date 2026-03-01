import { Metadata, NextPage } from "next";
import TravelPageComponent from "@/app/components/Travel";

export const metadata: Metadata = {
  title: "Trafeilio - Lowri Roberts",
  description: "Darganfod profiadau teithio ac anturiaethau Lowri Roberts.",
};

const Travel: NextPage = () => {
  return <TravelPageComponent lang="cy" />;
};

export default Travel;
