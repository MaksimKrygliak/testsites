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
  hiddenLeft: { opacity: 0, x: -200 }, // Появление слева
  hiddenRight: { opacity: 0, x: 200 }, // Появление справа
  hiddenTop: { opacity: 0, y: -200 }, // Появление сверху
  visible: { opacity: 1, x: 0, y: 0 }, // Конечное состояние
};

export default function Gallery() {
  return (
    <section className={styles.type_pictures}>
      {/* Первое изображение*/}
      <motion.div
        className={styles.image_box}
        initial="hiddenLeft"
        animate="visible"
        transition={{ duration: 0.5 }} // Длительность анимации
        variants={imageVariants}
      >
        <Link
          className={styles.link}
          href="/gallery/dark_side"
          color="foreground"
        >
          <Image
            className={styles.image}
            alt="dark_side"
            src={dark_side}
            placeholder="blur"
            quality={50}
            loading="lazy"
          />
          <motion.h2
            className={styles.name}
            initial="hiddenTop"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={imageVariants}
          >
            Dark side
          </motion.h2>
        </Link>
      </motion.div>

      {/* Второе изображение*/}
      <motion.div
        className={styles.image_box}
        initial="hiddenTop"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={imageVariants}
      >
        <Link
          className={styles.link}
          href="/gallery/industrial"
          color="foreground"
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
          <motion.h2
            className={styles.name}
            initial="hiddenTop"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={imageVariants}
          >
            Industrial
          </motion.h2>
        </Link>
      </motion.div>

      {/* Третье изображение*/}
      <motion.div
        className={styles.image_box}
        initial="hiddenRight"
        animate="visible"
        transition={{ duration: 0.5 }}
        variants={imageVariants}
      >
        <Link
          className={styles.link}
          href="/gallery/portraits"
          color="foreground"
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
          <motion.h2
            className={styles.name}
            initial="hiddenTop"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={imageVariants}
          >
            Portraits
          </motion.h2>
        </Link>
      </motion.div>
    </section>
  );
}
