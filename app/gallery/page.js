"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Импортируем framer-motion
import styles from "./gallery.module.scss";
import Image from "next/image";
import dark_side from "../../public/gallery/dark_side.jpg";
import industrial from "../../public/gallery/industrial.jpg";
import portraits from "../../public/gallery/portraits.jpg";

// Анимации для каждого изображения
const imageVariants = {
  hiddenLeft: { opacity: 0, x: -100 },   // Появление слева
  hiddenRight: { opacity: 0, x: 100 },   // Появление справа
  hiddenTop: { opacity: 0, y: -100 },    // Появление сверху
  visible: { opacity: 1, x: 0, y: 0 },   // Конечное состояние
};

export default function Gallery() {
  return (
    <section className={styles.type_pictures}>
      {/* Первое изображение - выезжает слева */}
      <Link className={styles.link} href="/gallery/dark_side" color="foreground">
        <motion.div
          className={styles.image_box}
          initial="hiddenLeft"
          animate="visible"
          transition={{ duration: 0.5 }} // Длительность анимации
          variants={imageVariants}
        >
          <Image
            className={styles.image}
            alt="dark_side"
            src={dark_side}
            placeholder="blur"
            quality={50}
            loading="lazy"
          />
        </motion.div>
        <h2 className={styles.name}>dark_side</h2>
      </Link>

      {/* Второе изображение - выезжает справа */}
      <Link className={styles.link} href="/gallery/industrial" color="foreground">
        <motion.div
          className={styles.image_box}
          initial="hiddenRight"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={imageVariants}
        >
          <Image
            className={styles.image}
            alt="industrial"
            src={industrial}
            placeholder="blur"
            quality={50}
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <h2 className={styles.name}>industrial</h2>
      </Link>

      {/* Третье изображение - выезжает сверху */}
      <Link className={styles.link} href="/gallery/portraits" color="foreground">
        <motion.div
          className={styles.image_box}
          initial="hiddenTop"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={imageVariants}
        >
          <Image
            className={styles.image}
            alt="portraits"
            src={portraits}
            placeholder="blur"
            quality={50}
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <h2 className={styles.name}>portraits</h2>
      </Link>
    </section>
  );
}
