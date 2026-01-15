import { Metadata, NextPage } from "next";
import UnderConstruction from "../../components/UnderConstruction";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Coding Project - Lowri Roberts",
  description: "View Lowri Roberts' coding projects and web development work.",
};

const CodingProjects: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Coding Projects</h1>
      <UnderConstruction language="english" />
    </main>
  );
};

export default CodingProjects;
