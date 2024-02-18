import { Metadata, NextPage } from "next";
import UnderConstruction from "../../components/UnderConstruction";

export const metadata: Metadata = {
  title: "Profiad - Lowri Roberts",
  description:
    "Cymerwch olwg ar brofiad proffesiynol a chymwysterau Lowri Roberts.",
};

const Experience: NextPage = (): JSX.Element => {
  return (
    <main className="flex md:min-h-[calc(100vh-108px)] min-h-[calc(100vh-148px)] flex-col items-center justify-between relative top-[100px] px-[56px] py-24">
      <h1>Profiad</h1>
      <UnderConstruction language="welsh" />
    </main>
  );
};

export default Experience;
