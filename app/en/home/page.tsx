import { Metadata } from "next";
import HomePageComponent from "@/app/components/Home";

export const metadata: Metadata = {
  title: "Home - Lowri Roberts",
  description:
    "Welcome to Lowri Roberts' portfolio website. Explore my work as a web designer.",
};

const HomePage = () => {
  return <HomePageComponent />;
};

export default HomePage;
