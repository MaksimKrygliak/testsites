"use client";

import React from "react";
import Image from "next/image";
import mainImage from "../../public/about_page/1.jpg";
import styles from "./about.module.scss";

// export const metadata = {
//   title: "About",
//   description: "About page",
// };

export default function About() {
  return (
    <>
      <section className={styles.main_block}>
        <div className={styles.image}>
          <Image
            className={styles.main_image}
            alt="error"
            src={mainImage}
            placeholder="blur"
            quality={100}
            fill
            style={{
              // width: "100%",  // Задает ширину изображения на 100% ширины контейнера
              // height: "auto", // Автоматическая высота для сохранения пропорций
              // objectFit: "contain", // Изображение масштабируется, не обрезаясь
              objectFit: "cover", // Изображение масштабируется, не обрезаясь
              // objectPosition: "top",
            }}
          />
        </div>
        <div className={styles.main_block_description}>
          <h1 className={styles.artist_name}>
            Александр Малаховский
          </h1>
          <h2 className={styles.artist_hobby}>
            Сучасний український художник
          </h2>
          <p className={styles.artist_name__description}>
          Я, Олександр Малаховський, — український художник, який працює в жанрах живопису та графіки. У своїй творчості я прагну передати глибокий символізм і уважність до деталей. Мої роботи досліджують різні аспекти людського буття, зосереджуючи увагу на взаємодії людини з навколишнім світом, природою та соціумом.
          Активно беру участь у виставках як в Україні, так і за її межами, і мені приємно отримувати визнання за свої інноваційні художні рішення та унікальний стиль. Мої картини відображають синтез класичних технік з сучасними підходами до композиції та колористики, створюючи глибокі, емоційно насичені образи.
          Також я експериментую з формами і матеріалами, часто поєднуючи різні техніки в одному творі. Мої роботи були представлені на багатьох персональних і групових виставках, і я завжди радий отримувати схвальні відгуки від критиків та глядачів.
          </p>
        </div>
      </section>
    </>
  );
}
