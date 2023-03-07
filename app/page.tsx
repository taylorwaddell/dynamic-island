"use client"; // this is a client component 👈🏽

import { AnimatePresence, motion } from "framer-motion";

import CodeSVG from "@/public/JSX-icons/CodeSVG";
import HomeSVG from "@/public/JSX-icons/HomeSVG";
import InfoSVG from "@/public/JSX-icons/InfoSVG";
import SearchSVG from "@/public/JSX-icons/SearchSVG";
import styles from "./page.module.scss";
import { useState } from "react";

export default function Home() {
  const [x, setX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  function handleSearchClick(): void {
    setIsVisible(() => !isVisible);
    if (x === 0) setX(() => -81);
    if (x === -81) setX(() => 0);
  }
  return (
    <AnimatePresence>
      <motion.div
        animate={{ width: "300px" }}
        transition={{ type: "spring", stiffness: 100 }}
        className={styles.bar}
      >
        {!isVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.iconWrapper}
            >
              <HomeSVG classes={styles.icons} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.searchIconWrapper}
              onClick={() => handleSearchClick()}
            >
              <SearchSVG classes={styles.icons} />
            </motion.div>
          </>
        )}

        {isVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.searchIconWrapper}
              onClick={() => handleSearchClick()}
            >
              <SearchSVG classes={styles.icons} />
            </motion.div>
            <motion.input
              autoFocus
              className={styles.searchBar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
        {!isVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.iconWrapper}
            >
              <CodeSVG classes={styles.icons} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.iconWrapper}
            >
              <InfoSVG classes={styles.icons} />
            </motion.div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
