"use client";
import React from "react";
import Link from "next/link";
import styles from "./gallery.module.scss";
import Image from "next/image";
import dark_side from "../../public/gallery/dark_side.jpg";
import industrial from "../../public/gallery/industrial.jpg";
import portraits from "../../public/gallery/portraits.jpg";

export default function Gallery() {
  return (
    <>
      <section
        className={styles.type_pictures}
        // className="type_pictures grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <Link
          className={styles.link}
          href="/gallery/dark_side"
          color="foreground"
          // className="font-bold"
        >
          <div className={styles.image_box}>
            <Image
              // elementClassNames={styles.image}
              className={styles.image}
              alt="dark_side"
              src={dark_side}
              placeholder="blur"
              quality={50}
              loading="lazy"
              // fill
              style={
                {
                  // width: "400px", // Задает ширину изображения на 100% ширины контейнера
                  // height: "auto", // Автоматическая высота для сохранения пропорций
                  // objectFit: "cover", // Изображение масштабируется, не обрезаясь
                  // objectFit: "contain", // Изображение масштабируется, не обрезаясь
                  // objectPosition: "top",
                }
              }
            />
          </div>
          <h2 className={styles.name}>dark_side</h2>
        </Link>
        <Link
          href="/gallery/industrial"
          color="foreground"
          // className="font-bold"
          className={styles.link}
        >
          <div className={styles.image_box}>
            <Image
              // elementClassNames={styles.image}
              className={styles.image}
              alt="industrial"
              src={industrial}
              placeholder="blur"
              quality={50}
              loading="lazy"
              // fill
              style={
                {
                  // width: "400px", // Задает ширину изображения на 100% ширины контейнера
                  // height: "auto", // Автоматическая высота для сохранения пропорций
                  // objectFit: "cover", // Изображение масштабируется, не обрезаясь
                  objectFit: "contain", // Изображение масштабируется, не обрезаясь
                  // objectPosition: "top",
                }
              }
            />
          </div>
          <h2 className={styles.name}>industrial</h2>
        </Link>
        <Link
          href="/gallery/portraits"
          color="foreground"
          // className="font-bold"
          className={styles.link}
        >
          <div className={styles.image_box}>
            <Image
              // elementClassNames={styles.image}
              className={styles.image}
              alt="portraits"
              src={portraits}
              placeholder="blur"
              quality={50}
              loading="lazy"
              // fill
              style={
                {
                  // width: "400px", // Задает ширину изображения на 100% ширины контейнера
                  // height: "auto", // Автоматическая высота для сохранения пропорций
                  // objectFit: "cover", // Изображение масштабируется, не обрезаясь
                  objectFit: "contain", // Изображение масштабируется, не обрезаясь
                  // objectPosition: "top",
                }
              }
            />
          </div>
          <h2 className={styles.name}>portraits</h2>
        </Link>
      </section>
    </>
  );
}

{
  /* <Image
              elementClassNames={styles.image}
              className={styles.image}
              alt="dark_side"
              src={dark_side}
              placeholder="blur"
              quality={50}
              layout="intrinsic"
              loading="lazy"
              // style={{
              //   width: "400px", // Задает ширину изображения на 100% ширины контейнера
              //   // height: "auto", // Автоматическая высота для сохранения пропорций
              //   objectFit: "cover", // Изображение масштабируется, не обрезаясь
              //   // objectFit: "contain", // Изображение масштабируется, не обрезаясь
              //   // objectPosition: "top",
              // }}
            /> */
}
