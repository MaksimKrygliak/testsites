"use client"
import React from "react";
import Link from "next/link";
import styles from "./gallery.module.scss";

export default function Gallery() {
  // const fetchData = async () => {
  //    const response = await fetch("http://localhost:5000/client/reviews");
  //    const data = await response.json()
  //    return data
  // }
  // console.log(fetchData());
  return (
    <>
      <section className={styles.type_pictures}>
        <Link href="/gallery/dark_side" color="foreground" className="font-bold">
          dark_side
        </Link>
        <Link href="/gallery/industrial" color="foreground" className="font-bold">
          industrial
        </Link>
        <Link href="/gallery/portraits" color="foreground" className="font-bold">
          portriats
        </Link>
      </section>
    </>
  );
}
