import CodeSVG from "@/public/JSX-icons/CodeSVG";
import HomeSVG from "@/public/JSX-icons/HomeSVG";
import InfoSVG from "@/public/JSX-icons/InfoSVG";
import { Inter } from "next/font/google";
import SearchSVG from "@/public/JSX-icons/SearchSVG";
import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.bar}>
      <div className={styles.iconWrapper}>
        <HomeSVG classes={styles.icons} />
      </div>
      <div className={styles.iconWrapper}>
        <SearchSVG classes={styles.icons} />
      </div>
      <div className={styles.iconWrapper}>
        <CodeSVG classes={styles.icons} />
      </div>
      <div className={styles.iconWrapper}>
        <InfoSVG classes={styles.icons} />
      </div>
    </div>
  );
}
