import * as React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Footer= () => {
  return (
    <footer className={styles.image}>
      <Image
        src="/../public/images/logo.png"
        alt="logo"
        width="220px"
        height="50px"
      />
    </footer>
  );
};
