import styles from "./UnderConstruction.module.css";

export default function UnderConstruction({ lang = "en" }: { lang?: string }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {lang === "cy" ? "Dal yn cael ei osod" : "Still under construction"}
      </p>
      <p className={styles.description}>
        {lang === "cy"
          ? "Yn y cyfamser gwelwch : "
          : "In the mean time, have a look at :"}{" "}
      </p>
      <div className={styles.linkContainer}>
        <a href="https://lowriroberts.netlify.app/" className={styles.link}>
          {lang === "cy" ? "hen bortfolio fi" : "my old portfolio"}
        </a>
      </div>
      <div className={styles.stripes}>
        <div className={`${styles.stripe} ${styles.stripeRotateRight}`}></div>
        <div className={`${styles.stripe} ${styles.stripeRotateLeft}`}></div>
      </div>
    </div>
  );
}
