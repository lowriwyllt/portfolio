import { Metadata, NextPage } from "next";
import { merriweather } from "../fonts";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Landing page - Lowri Roberts",
  description: "",
};

const LandingPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex md:min-h-[calc(100vh-108px)] min-h-[calc(100vh-148px)] flex-col items-center relative top-[100px] px-[56px] py-24">
      <h1 className={merriweather.className}>
        Welcome to my portfolio - Croeso i fy mhortfolio
      </h1>
      <Image
        src="/lowri_roberts_working.png"
        alt="Set up of Lowri Roberts work area.  She is wearing headphones while working on a laptop with a second monitor. She has a ipad on side."
        width={250}
        height={250}
      />
      <div className="flex gap-4">
        <Link
          href="/en/home"
          aria-label={"English Home"}
          className="flex items-center rounded-md p-2 bg-darkPurple text-white hover:text-darkPurple border-solid border-2 border-darkPurple   hover:bg-white transition-colors duration-300"
        >
          English
        </Link>
        <Link
          href="/cy/adra"
          aria-label={"Welsh Home"}
          className="flex items-center rounded-md p-2 bg-darkPurple text-white hover:text-darkPurple border-solid border-2 border-darkPurple   hover:bg-white transition-colors duration-300"
        >
          Cymraeg
        </Link>
      </div>
    </main>
  );
};

export default LandingPage;
