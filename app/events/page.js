"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import styles from "./contacts.module.scss";

export default function Events() {

  return (
    <>
      <section className={styles.main_block}>
        <div className={styles.form_box}>
          <h2 className={styles.input_box__header}>Зв'язатися зі мною</h2>
        </div>
      </section>
    </>
  );
}
