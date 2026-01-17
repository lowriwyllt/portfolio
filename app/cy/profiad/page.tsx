import { Metadata, NextPage } from "next";
import UnderConstruction from "../../components/UnderConstruction";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Profiad - Lowri Roberts",
  description:
    "Cymerwch olwg ar brofiad proffesiynol a chymwysterau Lowri Roberts.",
};

const CodingProjects: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Profiad</h1>
      <UnderConstruction lang="cy" />
    </main>
  );
};

export default CodingProjects;
