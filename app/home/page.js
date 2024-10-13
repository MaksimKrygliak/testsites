"use client";
import React from "react";
import Image from "next/image";
// import { Marck_Script } from "next/font/google";
import mainImage from "../../public/images/mainPhoto.jpg";
import styles from "./home.module.scss";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

// Анимации для каждого изображения
const imageVariants = {
  hiddenLeft: { opacity: 0, x: -200 }, // Появление слева
  hiddenRight: { opacity: 0, x: 200 }, // Появление справа
  hiddenTop: { opacity: 0, y: -200 }, // Появление сверху
  hiddenDown: { opacity: 0, y: 200 }, // Появление снизу
  visible: { opacity: 1, x: 0, y: 0 }, // Конечное состояние
};

// const marckScript = Marck_Script({
//   weight: "400",
//   subsets: ["latin", "cyrillic"],
// });

export default function Home() {
  // const fetchData = async () => {
  //    const response = await fetch("http://localhost:5000/client/reviews");
  //    const data = await response.json()
  //    return data
  // }
  // console.log(fetchData());
  const { locale } = useRouter();
  
  const translations = {
    en: { title: 'Олександр Малаховський' },
    ru: { title: 'Oleksandr Malakhovskyi' },
  };
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
            // className={`${marckScript.className} ${styles.artist_name}`}
            className={styles.artist_name}
            initial="hiddenTop"
            animate="visible"
            transition={{ duration: 0.5, delay: 0 }}
            variants={imageVariants}
          >
            <h1>{translations[locale].title}</h1>
          </motion.div>
          <motion.p
            // className={`${marckScript.className} ${styles.artist_name__description}`}
            className={styles.artist_name__description}
            initial="hiddenDown"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={imageVariants}
          >
            Визначення нашої власної реальності - це глибоко особистий і
            суб'єктивний досвід. Хоча ми ніколи не зможемо знати все, ми можемо
            прагнути бути відкритими для нових ідей та перспектив, та шукати
            знання та досвід, які кидають виклик та розширюють наше розуміння
            навколишнього світу. Вчиняючи так, ми можемо створити більше
            інклюзивну та різноманітну реальність, яка відображає багатство та
            складність людського досвіду
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

// <Image
//   className="img"
//   alt="error"
//   src={mainImage}
//   placeholder="blur"
//   quality={100}
//   fill
//   sizes="100vw"
//   style={{
//     objectFit: "cover",
//     objectPosition: "top",
//   }}
// />;
