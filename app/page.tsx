"use client"; // this is a client component 👈🏽

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import CodeSVG from "@/public/JSX-icons/CodeSVG";
import HomeSVG from "@/public/JSX-icons/HomeSVG";
import InfoSVG from "@/public/JSX-icons/InfoSVG";
import SearchSVG from "@/public/JSX-icons/SearchSVG";
import styles from "./page.module.scss";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  function handleSearchClick(): void {
    setIsVisible(() => !isVisible);
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'k' && e.metaKey) handleSearchClick();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <motion.div
      animate={{ width: `${!isVisible ? "300px" : "400px"}` }}
      transition={{ type: "spring", stiffness: 100 }}
      layout
      className={styles.bar}
    >
      {!isVisible && (
        <AnimatePresence>
          <motion.div
            key={"home"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.iconWrapper}
          >
            <HomeSVG classes={styles.icons} />
          </motion.div>
        </AnimatePresence>
      )}
      {!isVisible && (
        <AnimatePresence>
          <motion.div
            key={"code"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.iconWrapper}
          >
            <CodeSVG classes={styles.icons} />
          </motion.div>
          <motion.div
            key={"info"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.iconWrapper}
          >
            <InfoSVG classes={styles.icons} />
          </motion.div>
        </AnimatePresence>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={"search"}
        className={`${styles.searchIconWrapper} ${isVisible && styles.gray} ${
          isVisible && styles.borderRadiusAdjustment
        } ${!isVisible && styles.grayHover}`}
        onClick={() => handleSearchClick()}
        layout
      >
        <SearchSVG classes={styles.icons} />
      </motion.div>

      {isVisible && (
        <motion.input
          autoFocus
          key={"searchInput"}
          className={`${styles.searchBar} ${isVisible && styles.gray}`}
          initial={{ width: "0px" }}
          animate={{ width: "100%" }}
          transition={{ duration: .325 }}
          exit={{ width: "0px" }}
        />
      )}
    </motion.div>
  );
}
