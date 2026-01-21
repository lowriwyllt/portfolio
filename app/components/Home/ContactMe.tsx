import { merriweather } from "@/app/fonts";
import styles from "./ContactMe.module.css";
import langType from "@/app/constants/langType";

export default function ContactMe({ lang = "en" }: { lang?: langType }) {
  return (
    <div className={styles.container}>
      <h2 className={`${merriweather.className} ${styles.heading}`}>
        {lang === "cy" ? "Cysylltwch a fi" : "Contact Me"}
      </h2>
      <p className={styles.description}>
        {lang === "cy"
          ? "Cysylltwch a fi trwy ebost neu taro golwg ar fy cyfryngau cymdeithasol :)"
          : "Contact me via email or check out my socials :)"}
      </p>
      <div className={styles.svgWrapper}>
        <div className={styles.svgContainer}>
          <svg
            width="100%"
            viewBox="0 0 315 107"
            version="1.1"
            className={styles.svg}
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="0.1em"
              fill="none"
              fillRule="evenodd"
            >
              <path
                id="Path-1"
                fill="none"
                stroke="#000"
                strokeWidth="0.3em"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeDasharray="5,12"
                d="M5 55L85.7028 84.4701C146.542 106.687 214.443 97.2455 266.913 59.2735L294.783 39.1045C321.173 20.0061 351.928 7.82353 384.238 3.66934L405 1H411"
              />

              <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#000">
                <animateMotion
                  rotate="auto"
                  begin="0s;"
                  dur="1.6s"
                  repeatCount="1"
                  fill="freeze"
                >
                  <mpath xlinkHref="#Path-1" />
                </animateMotion>
              </polyline>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
