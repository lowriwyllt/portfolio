import { Metadata, NextPage } from "next";
import TravelPageComponent from "@/app/components/Travel";

export const metadata: Metadata = {
  title: "Travel - Lowri Roberts",
  description: "Discover Lowri Roberts' travel experiences and adventures.",
};

const Travel: NextPage = () => {
  return <TravelPageComponent lang="en" />;
};

export default Travel;
