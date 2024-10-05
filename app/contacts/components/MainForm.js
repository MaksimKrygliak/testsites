"use client";

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export default function MainForm({ lable }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: "onChange" // Обновление валидности формы в реальном времени
  });

  const onSubmit = async (formData) => {
    const data = {
      name: formData.Name,
      phone: formData.Phone,
      category: lable,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    try {
      const response = await fetch('http://localhost:5000/contact', options);
      const result = await response.json();
  
      if (response.ok) {
        console.log(`User created: ${result.data.name}`);
        reset();
        onOpenChange(false); // Закрытие модального окна после успешной отправки формы
      } else {
        alert(`Failed to create user: ${result.error}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };


  return (
    <>
      <Button onPress={onOpen} color="warning" className="mx-auto text-color-white w-[150px]">Тисни щоб записатися</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">{lable}</ModalHeader>
              <ModalBody>
                <Input
                  {...register("Name", {
                    required: "Обов'язкове поле",
                    pattern: {
                      value: /^[А-Яа-яЁёҐґІіЇїЄєA-Za-z]+$/,
                      message: "Ім'я повинно бути без цифр"
                    },
                    maxLength: 10,
                    minLength: 2
                  })}
                  aria-invalid={errors.Name ? "true" : "false"}
                  autoFocus
                  endContent={
                    <NameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Name"
                  placeholder="Enter your Name"
                  variant="bordered"
                />
                {errors.Name && <p role="alert">{errors.Name.message}</p>}

                <Input
                  {...register("Phone", {
                    required: "Обов'язкове поле",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Номер телефона должен содержать только цифры"
                    },
                    maxLength: 13,
                    minLength: 10
                  })}
                  aria-invalid={errors.Phone ? "true" : "false"}
                  endContent={
                    <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Phone"
                  placeholder="+380 (___) __-__-___"
                  defaultValue="0981540120"
                  type="tel"
                  variant="bordered"
                />
                {errors.Phone && <p role="alert">{errors.Phone.message}</p>}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Відмінити
                </Button>
                <Button
                  type="submit"
                  color="warning"
                  disabled={!isValid} // Блокировка кнопки, если форма не валидна
                >
                  Записатись
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}