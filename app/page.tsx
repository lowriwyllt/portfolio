import { Metadata, NextPage } from "next";
import { merriweather } from "./fonts";
import Link from "next/link";
import UnderConstruction from "./components/UnderConstruction";

export const metadata: Metadata = {
  title: "Landing page - Lowri Roberts",
  description: "",
};

const LandingPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex md:min-h-[calc(100vh-108px)] min-h-[calc(100vh-148px)] flex-col items-center relative top-[100px] px-[56px] py-24">
      <h1 className={merriweather.className}>
        Choose Your Language - only avaiable in English at the moment
      </h1>
      <Link
        href="/home"
        aria-label={"Home"}
        className="flex gap-4 items-center rounded-md p-2"
      >
        Take me to the Engish home page
      </Link>
      <UnderConstruction />
    </main>
  );
};

export default LandingPage;
