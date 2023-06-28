import { Metadata, NextPage } from "next";
import UnderConstruction from "../components/UnderConstruction";

export const metadata: Metadata = {
  title: "Experience - Lowri Roberts",
  description:
    "Explore Lowri Roberts' professional experience and qualifications.",
};

const Experience: NextPage = (): JSX.Element => {
  return (
    <main className="flex md:min-h-[calc(100vh-108px)] min-h-[calc(100vh-148px)] flex-col items-center justify-between relative top-[100px] px-[56px] py-24">
      <h1>Experience</h1>
      <UnderConstruction />
    </main>
  );
};

export default Experience;
