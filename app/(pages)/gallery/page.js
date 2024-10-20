// import React from "react";
import Link from "next/link";
// import { motion } from "framer-motion"; // Импортируем framer-motion
import styles from "./gallery.module.scss";
import Image from "next/image";
import dark_side from "@/public/gallery/dark_side.jpg";
import industrial from "@/public/gallery/industrial.jpg";
import portraits from "@/public/gallery/portraits.jpg";

// import i18n from "i18next";
// import { useTranslation } from "react-i18next";

// Анимации для каждого изображения
// const imageVariants = {
//   hiddenLeft: { opacity: 0, x: -200 }, // Появление слева
//   hiddenRight: { opacity: 0, x: 200 }, // Появление справа
//   hiddenTop: { opacity: 0, y: -200 }, // Появление сверху
//   visible: { opacity: 1, x: 0, y: 0 }, // Конечное состояние
// };

async function getCollection_Lines_Data() {
  const collections = [
    {
      href: "/gallery/dark_side",
      alt: "dark_side",
      src: dark_side,
      name: "dark_side",
    },
    {
      href: "/gallery/industrial",
      alt: "industrial",
      src: industrial,
      name: "industrial",
    },
    {
      href: "/gallery/portraits",
      alt: "portraits",
      src: portraits,
      name: "portraits",
    },
  ];
  return collections;
}

export default async function Gallery() {
  // const { t, i18n } = useTranslation();
  const collectionLines = await getCollection_Lines_Data();

  return (
    // <section className={styles.type_pictures}>
    //   {/* Первое изображение*/}
    //   <div
    //     className={styles.image_box}
    //     // initial="hiddenLeft"
    //     // animate="visible"
    //     // transition={{ duration: 0.5 }} // Длительность анимации
    //     // variants={imageVariants}
    //   >
    //     <Link
    //       className={styles.link}
    //       href={collectionLines.collection_dark_side.href}
    //       color="foreground"
    //     >
    //       <Image
    //         className={styles.image}
    //         alt={collectionLines.collection_dark_side.alt}
    //         src={collectionLines.collection_dark_side.src}
    //         placeholder="blur"
    //         quality={50}
    //         loading="lazy"
    //       />
    //       <h2
    //         className={styles.name}
    //         // initial="hiddenTop"
    //         // animate="visible"
    //         // transition={{ duration: 0.5, delay: 0.5 }}
    //         // variants={imageVariants}
    //       >
    //         {/* {t("gallery_dark_side")} */}
    //         {collectionLines.collection_dark_side.name}
    //       </h2>
    //     </Link>
    //   </div>

    //   {/* Второе изображение*/}
    //   <div
    //     className={styles.image_box}
    //     // initial="hiddenTop"
    //     // animate="visible"
    //     // transition={{ duration: 0.5 }}
    //     // variants={imageVariants}
    //   >
    //     <Link
    //       className={styles.link}
    //       href={collectionLines.collection_industrial.href}
    //       color="foreground"
    //     >
    //       <Image
    //         className={styles.image}
    //         alt={collectionLines.collection_industrial.alt}
    //         src={collectionLines.collection_industrial.src}
    //         placeholder="blur"
    //         quality={50}
    //         loading="lazy"
    //         style={{ objectFit: "contain" }}
    //       />
    //       <h2
    //         className={styles.name}
    //         // initial="hiddenTop"
    //         // animate="visible"
    //         // transition={{ duration: 0.5, delay: 0.5 }}
    //         // variants={imageVariants}
    //       >
    //         {/* {t("gallery_industrial")} */}
    //         {collectionLines.collection_industrial.name}
    //       </h2>
    //     </Link>
    //   </div>

    //   {/* Третье изображение*/}
    //   <div
    //     className={styles.image_box}
    //     // initial="hiddenRight"
    //     // animate="visible"
    //     // transition={{ duration: 0.5 }}
    //     // variants={imageVariants}
    //   >
    //     <Link
    //       className={styles.link}
    //       href="/gallery/portraits"
    //       color="foreground"
    //     >
    //       <Image
    //         className={styles.image}
    //         alt="portraits"
    //         src={portraits}
    //         placeholder="blur"
    //         quality={50}
    //         loading="lazy"
    //         style={{ objectFit: "contain" }}
    //       />
    //       <h2
    //         className={styles.name}
    //         // initial="hiddenTop"
    //         // animate="visible"
    //         // transition={{ duration: 0.5, delay: 0.5 }}
    //         // variants={imageVariants}
    //       >
    //         {/* {t("gallery_portraits")} */}
    //         gallery_portraits
    //       </h2>
    //     </Link>
    //   </div>
    // </section>

    <section className={styles.type_pictures}>
      {collectionLines.map((line) => (
        <div
          key={line.href}
          className={styles.image_box}
          // initial="hiddenLeft"
          // animate="visible"
          // transition={{ duration: 0.5 }} // Длительность анимации
          // variants={imageVariants}
        >
          <Link className={styles.link} href={line.href} color="foreground">
            <Image
              className={styles.image}
              // onLoad={(e) => console.log(e.target.naturalWidth)} // вызов функции после того как картинка полностью загрузится
              // onError={(e) => console.error(e.target.id)} // Функция обратного вызова, которая вызывается, если изображение не загружается.
              alt={line.alt}
              src={line.src}
              placeholder="blur" // размытие заднего фона при загрузке картинки
              // blurDataURL="/path-to-small-blurry-version.jpg"  // если включено свойство placeholder="blur" и картинка без импорта - добавляем сжатое/размытое изображение
              quality={50}
              priority={false} // если true - loading = 'lazy' отменяеться
              loading="lazy" // {lazy - загрузка картинки в области просмотра} | {eager - немедленная загрузка картинки}
              fill={false} //заставляет изображение заполнять родительский элемент
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  // предоставляет информацию о том, насколько широким будет изображение в разных контрольных точках
              sizes="100%"
              width={300} // задать правильное соотношение сторон адаптивного изображения
              height={200}
              style={
                {
                  // width: "100%",
                  // height: "200px",
                  // objectFit: "cover", // Изображение масштабируется, не обрезаясь
                  // objectFit: "contain", // Изображение масштабируется, не обрезаясь
                  // objectPosition: "top",
                }
              }
            />
            <h2
              className={styles.name}
              // initial="hiddenTop"
              // animate="visible"
              // transition={{ duration: 0.5, delay: 0.5 }}
              // variants={imageVariants}
            >
              {/* {t("gallery_dark_side")} */}
              {line.name}
            </h2>
          </Link>
        </div>
      ))}
    </section>
  );
}
