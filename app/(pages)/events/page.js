import styles from "./events.module.scss";
import Link from "next/link";
import Image from "next/image";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
import { EventsData } from "./events";

// const imageVariants = {
//   hiddenLeft: { opacity: 0, x: -200 }, // Появление слева
//   hiddenRight: { opacity: 0, x: 200 }, // Появление справа
//   hiddenTop: { opacity: 0, y: -200 }, // Появление сверху
//   hiddenDown: { opacity: 0, y: 200 }, // Появление снизу
//   visible: { opacity: 1, x: 0, y: 0 }, // Конечное состояние
// };

async function getEventsData() {
  const events = await EventsData();
  return events;
}

export default async function Events() {
  // const { t, i18n } = useTranslation();
  const events = await getEventsData();

  return (
    <>
      {/* <section className={styles.main_block}>
        <motion.div
          className={styles.event}
          initial="hiddenTop"
          animate="visible"
          transition={{ duration: 0.5, delay: 0 }}
          // transition: {
          //   duration: 1, // Длительность анимации
          //   ease: [0.4, 0, 0.2, 1], // Плавность анимации
          //   delay: 0.5, // Задержка анимации на 0.5 секунд
          // },
          variants={imageVariants}
        >
          <Image
            // className={styles.Image_LightGallery}
            onLoad={(e) => console.log(e.target.naturalWidth)} // вызов функции после того как картинка полностью загрузится
            onError={(e) => console.error(e.target.id)} // Функция обратного вызова, которая вызывается, если изображение не загружается.
            alt="event_1"
            src={event_1}
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
          <h3 className={styles.name_event}>
          <Link href={`/events/${encodeURIComponent('ARS_ALTERA')}`}>
              t("events_1")
            </Link>
          </h3>
          <p>{t("events_1_description")}</p>
        </motion.div>
      </section> */}
      <section className={styles.main_block}>
        {events.map((event) => (
          <div
            className={styles.event}
            // initial="hiddenTop"
            // animate="visible"
            // transition={{ duration: 0.5 }}
            // variants={imageVariants}
          >
            <Image
              alt={event.title}
              src={event.image}
              placeholder="blur"
              width={300}
              height={200}
              quality={50}
              loading="lazy"
            />
            <h3 className={styles.name_event}>
              {/* <Link href={`/events/${encodeURIComponent(event.title)}`}> */}
              <Link href={`/events/${event.title}`}>
                {event.title}
              </Link>
            </h3>
            <p>{event.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
export const revalidate = 60;
