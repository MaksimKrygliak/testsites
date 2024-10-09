"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Rubik_Wet_Paint } from "next/font/google";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import styles from "./contacts.module.scss";

const rubik_Wet_Paint = Rubik_Wet_Paint({
  weight: "400",
  subsets: ["latin", "cyrillic"],
});

export default function Contacts() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      textarea: formData.textarea,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch("/api/contact", options); // Теперь запрос идет на API route
      const result = await response.json();

      if (response.ok) {
        console.log(`Письмо отправлено: ${result.message}`);
        reset();
      } else {
        alert(`Ошибка отправки письма: ${result.error}`);
      }
    } catch (error) {
      alert(`Произошла ошибка: ${error.message}`);
    }
  };

  return (
    <>
      <section className={`${rubik_Wet_Paint.className} ${styles.main_block}`}>
        <div className={styles.form_box}>
          <h2 className={styles.input_box__header}>Зв'язатися зі мною</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
              className={styles.input_name}
              {...register("name", {
                required: "Обов'язкове поле",
                pattern: {
                  value: /^[А-Яа-яЁёҐґІіЇїЄєA-Za-z]+$/,
                  message: "Ім'я повинно бути без цифр",
                },
                maxLength: 10,
                minLength: 2,
                // autoFocus
              })}
              // aria-invalid={errors.Name ? "true" : "false"}
              // endContent={
              //   <NameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              // }
              label="Name"
              placeholder="Enter your Name"
              variant="bordered"
            />
            {errors.name && (
              <p
                style={{
                  color: "red",
                  textAlign: "left",
                }}
              >
                {errors.name.message}
              </p>
            )}

            <Input
              className={styles.input_email}
              {...register("email", {
                // required: "Обов'язкове поле",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "email address + @gmail.com",
                },
              })}
              // endContent={
              //   <span>@gmail.com</span>
              // }
              label="email"
              placeholder="Enter your email"
              variant="bordered"
            />
            {errors.email && (
              <p
                style={{
                  color: "red",
                  textAlign: "left",
                }}
              >
                {errors.email.message}
              </p>
            )}

            <Input
              className={styles.input_phone}
              {...register("phone", {
                // required: "Обов'язкове поле",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Номер телефона повинен містити лише цифри",
                },
                maxLength: {
                  value: 13,
                  message: "Телефон не повинен бути більшим за 13 цифр",
                },
                minLength: {
                  value: 10,
                  message: "Телефон повинен містити щонайменше 10 цифр",
                },
              })}
              startContent={<span>+38</span>}
              label="Phone"
              placeholder="(___) __-__-___"
              defaultValue=""
              // type="tel"
              variant="bordered"
            />
            {errors.phone && (
              <p
                style={{
                  color: "red",
                  textAlign: "left",
                }}
              >
                {errors.phone.message}
              </p>
            )}

            <Textarea
              className={styles.input_textarea}
              {...register("textarea", {
                // required: "Обов'язкове поле",
                pattern: {
                  value: /^[А-Яа-яЁёҐґІіЇїЄєA-Za-z]+$/,
                  message: "Помилка",
                },
                // maxLength: 10,
                // minLength: 2,
                // autoFocus
              })}
              label="Description"
              labelPlacement="inside"
              variant="bordered"
              placeholder="Enter your description"
              // className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />
            <Button
              type="submit"
              color="warning"
              // disabled={!isValid} // Блокировка кнопки, если форма не валидна
            >
              Відправити
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
