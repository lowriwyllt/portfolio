import { Metadata, NextPage } from "next";
import UnderConstruction from "../../components/UnderConstruction";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Trafeilio - Lowri Roberts",
  description: "Darganfod profiadau teithio ac anturiaethau Lowri Roberts.",
};

const CodingProjects: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Trafeilio</h1>
      <UnderConstruction lang="cy" />
    </main>
  );
};

export default CodingProjects;
