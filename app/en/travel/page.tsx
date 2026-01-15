import { Metadata, NextPage } from "next";
import UnderConstruction from "../../components/UnderConstruction";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Travel - Lowri Roberts",
  description: "Discover Lowri Roberts' travel experiences and adventures.",
};

const CodingProjects: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Travel</h1>
      <UnderConstruction language="english" />
    </main>
  );
};

export default CodingProjects;
