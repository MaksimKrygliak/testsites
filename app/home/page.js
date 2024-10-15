"use client";
import React from "react";
import Image from "next/image";
import mainImage from "../../public/images/mainPhoto.jpg";
import styles from "./home.module.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Анимации для каждого изображения
const imageVariants = {
  hiddenLeft: { opacity: 0, x: -200 }, // Появление слева
  hiddenRight: { opacity: 0, x: 200 }, // Появление справа
  hiddenTop: { opacity: 0, y: -200 }, // Появление сверху
  hiddenDown: { opacity: 0, y: 200 }, // Появление снизу
  visible: { opacity: 1, x: 0, y: 0 }, // Конечное состояние
};

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className={styles.main_block}>
        <motion.div
          className={styles.image_box}
          initial="hiddenLeft"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={imageVariants}
        >
          <Image
            className={styles.image}
            alt="mainImage"
            src={mainImage}
            placeholder="blur"
            quality={100}
            loading="lazy"
          />
        </motion.div>
        <div className={styles.main_block_description}>
          <motion.div
            className={styles.artist_name}
            initial="hiddenTop"
            animate="visible"
            transition={{ duration: 0.5, delay: 0 }}
            variants={imageVariants}
          >
            <h1>{t("Name_Artist")}</h1>
          </motion.div>
          <motion.p
            className={styles.artist_name__description}
            initial="hiddenDown"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={imageVariants}
          >
            {t("artist_name__description")}
            <motion.span
              className={styles.icon_wrapper}
              initial="hiddenRight"
              animate="visible"
              transition={{ duration: 0.5, delay: 1 }}
              // transition: {
              //   duration: 1, // Длительность анимации
              //   ease: [0.4, 0, 0.2, 1], // Плавность анимации
              //   delay: 0.5, // Задержка анимации на 0.5 секунд
              // },
              variants={imageVariants}
            >
              <Image
                className="pero"
                alt="pero"
                src="/home_page/home2.png"
                // placeholder="blur"
                quality={100}
                // fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  // objectPosition: "top",
                }}
                width={50}
                height={50}
              />
            </motion.span>
          </motion.p>
        </div>
      </section>
    </>
  );
}