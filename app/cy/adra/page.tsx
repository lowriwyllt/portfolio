import HomePageComponent from "@/app/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adra - Lowri Roberts",
  description:
    "Croeso i wefan bortffolio Lowri Roberts. Archwiliwch fy ngwaith fel datblygwr gwe.",
};

const HomePage = () => {
  return <HomePageComponent language="welsh" />;
};

export default HomePage;
