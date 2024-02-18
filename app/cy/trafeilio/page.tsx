import { Metadata, NextPage } from "next";
import UnderConstruction from "../../components/UnderConstruction";

export const metadata: Metadata = {
  title: "Trafeilio - Lowri Roberts",
  description: "Darganfod profiadau teithio ac anturiaethau Lowri Roberts.",
};

const Travel: NextPage = (): JSX.Element => {
  return (
    <main className="flex md:min-h-[calc(100vh-108px)] min-h-[calc(100vh-148px)] flex-col items-center justify-between relative top-[100px] px-[56px] py-24">
      <h1>Trafeilio</h1>
      <UnderConstruction language="welsh" />
    </main>
  );
};

export default Travel;
