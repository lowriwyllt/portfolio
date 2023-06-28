import { Metadata, NextPage } from "next";
import UnderConstruction from "../components/UnderConstruction";

export const metadata: Metadata = {
  title: "Coding Project - Lowri Roberts",
  description: "View Lowri Roberts' coding projects and web development work.",
};

const CodingProjects: NextPage = (): JSX.Element => {
  return (
    <main className="flex md:min-h-[calc(100vh-108px)] min-h-[calc(100vh-148px)] flex-col items-center justify-between relative top-[100px] px-[56px] py-24">
      <h1>Coding Projects</h1>
      <UnderConstruction />
    </main>
  );
};

export default CodingProjects;
