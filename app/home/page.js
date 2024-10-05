"use client";
import React from "react";
import Image from "next/image";
import { Marck_Script } from "next/font/google";
import mainImage from "../../public/images/mainPhoto.jpg";
import styles from "./home.module.scss";

const marckScript = Marck_Script({
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

export default function Home() {
  // const fetchData = async () => {
  //    const response = await fetch("http://localhost:5000/client/reviews");
  //    const data = await response.json()
  //    return data
  // }
  // console.log(fetchData());
  return (
    <>
      <section className={styles.main_block}>
        <div className={styles.image_box}>
          <Image
            className={styles.image}
            alt="mainImage"
            src={mainImage}
            placeholder="blur"
            quality={100}
            loading="lazy"
          />
        </div>
        <div className={styles.main_block_description}>
          <h1 className={`${marckScript.className} ${styles.artist_name}`}>
            Олександр Малаховський
          </h1>
          <p
            className={`${marckScript.className} ${styles.artist_name__description}`}
          >
            Визначення нашої власної реальності - це глибоко особистий і
            суб'єктивний досвід. Хоча ми ніколи не зможемо знати все, ми можемо
            прагнути бути відкритими для нових ідей та перспектив, та шукати
            знання та досвід, які кидають виклик та розширюють наше розуміння
            навколишнього світу. Вчиняючи так, ми можемо створити більше
            інклюзивну та різноманітну реальність, яка відображає багатство та
            складність людського досвіду
            <span className={styles.icon_wrapper}>
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
            </span>
          </p>
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
