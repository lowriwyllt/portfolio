import { Metadata, NextPage } from "next";
import UnderConstruction from "../../components/UnderConstruction";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Experience - Lowri Roberts",
  description:
    "Explore Lowri Roberts' professional experience and qualifications.",
};

const CodingProjects: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Experience</h1>
      <UnderConstruction language="english" />
    </main>
  );
};

export default CodingProjects;
