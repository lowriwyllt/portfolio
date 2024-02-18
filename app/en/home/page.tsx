import { Metadata, NextPage } from "next";
import Image from "next/image";
import TechStack from "../../components/home/TechStackComponent";
import RecentProjects from "../../components/home/RecentProjects";
import RecentAdventures from "../../components/home/RecentAdventures";
import ContactMe from "../../components/home/ContactMe";
import { merriweather } from "../../fonts";

export const metadata: Metadata = {
  title: "Home - Lowri Roberts",
  description:
    "Welcome to Lowri Roberts' portfolio website. Explore my work as a web designer.",
};

const Home: NextPage = (): JSX.Element => {
  return (
    <main
      className="md:min-h-[calc(100vh-108px)] min-h-[calc(100vh-148px)] h-fit
     relative top-[100px] pb-[100px]"
    >
      <div className="flex flex-col md:flex-row items-center justify-center p-2 pl-8 pr-[60px]">
        <Image
          src="/lowri_roberts_working.png"
          alt="Set up of Lowri Roberts work area.  She is wearing headphones while working on a laptop with a second monitor. She has a ipad on side."
          width={500}
          height={500}
        />
        <div className="md:p-4 max-w-[90%] md:max-w-[50%]">
          <h1 className={merriweather.className}>Lowri Roberts</h1>
          <p>
            {
              "I'm a full stack web developer, with a focus on JavaScript. I'm dedicated to delivering sleek and dynamic websites."
            }
          </p>
        </div>
      </div>
      <div className="w-full bg-lilac text-white pl-8">
        <TechStack />
        <RecentProjects />
        <RecentAdventures />
        <ContactMe />
      </div>
    </main>
  );
};

export default Home;
