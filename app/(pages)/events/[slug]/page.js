import styles from "./event.module.scss";
import Image from "next/image";
import { EventsData } from "../events";

// Генерация статических маршрутов
export async function generateStaticParams() {
  const events = await EventsData();
  
  return events.map((event) => ({
    slug: event.slug, // Используйте slug вместо title
  }));
}

export default async function EventPage({ params }) {
  // Получаем slug из параметров URL
  const { slug } = params;

  // Декодируем название обратно
  const decodedSlug = decodeURIComponent(slug);
  // Получаем данные события на основе slug
  const events = await EventsData(slug);

   // Находим событие по заголовку
  const event = events.find((event) => event.title === decodedSlug);

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <section className={styles.main_block}>
      <div className={styles.event}>
        <Image
          alt={event.title}
          src={event.image}
          placeholder="blur"
          width={300}
          height={200}
          quality={50}
          loading="lazy"
        />
        <h1 className={styles.name_event}>{event.title}</h1>
        <p>{event.description}</p>
        <p>{event.content}</p>
      </div>
    </section>
  );
}
export const revalidate = 60;