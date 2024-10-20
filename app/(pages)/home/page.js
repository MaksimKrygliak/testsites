import Image from "next/image";
import mainImage from "@/public/images/mainPhoto.jpg";
import styles from "./home.module.scss";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

async function getPersonData() {
  const sanya = {
    name: "Олександр Малаховський",
    description:
      "Визначення нашої власної реальності - це глибоко особистий і суб'єктивний досвід. Хоча ми ніколи не зможемо знати все, ми можемо прагнути бути відкритими для нових ідей та перспектив, та шукати знання та досвід, які кидають виклик та розширюють наше розуміння навколишнього світу. Вчиняючи так, ми можемо створити більше інклюзивну та різноманітну реальність, яка відображає багатство та складність людського досвіду",
  };
  return {
    sanya,
  };
}

export default async function Home() {
  // const { t, i18n } = useTranslation();
  const person = await getPersonData();

  return (
    <>
      <section className={styles.main_block}>
        <div
          className={styles.image_box}
          // initial="hiddenLeft"
          // animate="visible"
          // transition={{ duration: 0.5 }}
          // // transition: {
          // //   duration: 1, // Длительность анимации
          // //   ease: [0.4, 0, 0.2, 1], // Плавность анимации
          // //   delay: 0.5, // Задержка анимации на 0.5 секунд
          // // },
          // variants={imageVariants}
        >
          <Image
            className={styles.image}
            // onLoad={(e) => console.log(e.target.naturalWidth)} // вызов функции после того как картинка полностью загрузится
            // onError={(e) => console.error(e.target.id)} // Функция обратного вызова, которая вызывается, если изображение не загружается.
            alt="mainImage"
            src={mainImage}
            placeholder="blur" // размытие заднего фона при загрузке картинки
            // blurDataURL="/path-to-small-blurry-version.jpg"  // если включено свойство placeholder="blur" и картинка без импорта - добавляем сжатое/размытое изображение
            quality={100}
            priority={false} // если true - loading = 'lazy' отменяеться
            loading="lazy" // {lazy - загрузка картинки в области просмотра} | {eager - немедленная загрузка картинки}
            fill={false} //заставляет изображение заполнять родительский элемент
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  // предоставляет информацию о том, насколько широким будет изображение в разных контрольных точках
            sizes="100%"
            // width={300} // задать правильное соотношение сторон адаптивного изображения
            // height={200}
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
        </div>
        <div className={styles.main_block_description}>
          <h1
            className={styles.artist_name}
            // initial="hiddenTop"
            // animate="visible"
            // transition={{ duration: 0.5, delay: 0 }}
            // // transition: {
            // //   duration: 1, // Длительность анимации
            // //   ease: [0.4, 0, 0.2, 1], // Плавность анимации
            // //   delay: 0.5, // Задержка анимации на 0.5 секунд
            // // },
            // variants={imageVariants}
          >
            {person.sanya.name}
          </h1>
          <p
            className={styles.artist_name__description}
            // initial="hiddenDown"
            // animate="visible"
            // transition={{ duration: 0.5, delay: 0.5 }}
            // variants={imageVariants}
          >
            {person.sanya.description}
            <span
              className={styles.icon_wrapper}
              // initial="hiddenRight"
              // animate="visible"
              // transition={{ duration: 0.5, delay: 1 }}
              // // transition: {
              // //   duration: 1, // Длительность анимации
              // //   ease: [0.4, 0, 0.2, 1], // Плавность анимации
              // //   delay: 0.5, // Задержка анимации на 0.5 секунд
              // // },
              // variants={imageVariants}
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
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
export const revalidate = 10;
