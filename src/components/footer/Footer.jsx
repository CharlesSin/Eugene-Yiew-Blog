import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            className={styles.logoImg}
            src="/logo.png"
            alt="eugene"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>Eugeneblog</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
