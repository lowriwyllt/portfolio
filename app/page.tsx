import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Lowri Roberts",
  description:
    "Welcome to Lowri Roberts' portfolio website. Explore my work as a web designer.",
};

export default function Home() {
  return (
    <main className="flex md:min-h-[calc(100vh-108px)] min-h-[calc(100vh-148px)] flex-col items-center justify-between relative top-[100px] px-[56px] py-24">
      <h1>Home</h1>
    </main>
  );
}
