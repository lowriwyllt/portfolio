import { Metadata, NextPage } from "next";
import UnderConstruction from "../../components/UnderConstruction";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Prosiectau Codio - Lowri Roberts",
  description: "Gweld prosiectau codio a gwaith datblygu gwe Lowri Roberts.",
};

const CodingProjects: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Prosiectau Codio</h1>
      <UnderConstruction lang="cy" />
    </main>
  );
};

export default CodingProjects;
