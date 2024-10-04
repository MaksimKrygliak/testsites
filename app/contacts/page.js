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
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isValid },
  // } = useForm({
  //   mode: "onChange", // Обновление валидности формы в реальном времени
  // });

  const { register, handleSubmit, reset,  formState: { errors } } = useForm({
    mode: "onChange"
  })
  
  const onSubmit = async (formData) => {
    console.log(formData)
    reset()
    // const data = {
    //   name: formData.name,
    //   phone: formData.phone,
    //   email: formData.email,
    //   textarea: formData.textarea,
    // };
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // };

    // try {
    //   const response = await fetch("http://localhost:5000/client", options);
    //   const result = await response.json();

    //   if (response.ok) {
    //     console.log(`User created: ${result.data.name}`);
    //     reset();
    //     // onOpenChange(false); // Закрытие модального окна после успешной отправки формы
    //   } else {
    //     alert(`Failed to create user: ${result.error}`);
    //   }
    // } catch (error) {
    //   alert(`An error occurred: ${error.message}`);
    // }
  };

  return (
    <>
      <section className={`${rubik_Wet_Paint.className} ${styles.main_block}`}>
        <div className={styles.form_box}>
          <h2 className={styles.input_box__header}>Зв'язатися зі мною</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
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
            {errors.name && <p style={{
              color: "red",
              textAlign: "left"
            }}>{errors.name.message}</p>}

            <Input
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
            {errors.email && <p style={{
              color: "red",
              textAlign: "left"
            }}>{errors.email.message}</p>}

            <Input
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
              }
              })}
              // aria-invalid={errors.Phone ? "true" : "false"}
              startContent={
                <span>+38</span>
              }
              label="Phone"
              placeholder="0 (___) __-__-___"
              defaultValue=""
              // type="tel"
              variant="bordered"
            />
            {errors.phone && <p style={{
              color: "red",
              textAlign: "left"
            }}>{errors.phone.message}</p>}

            <Textarea
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
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
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













// MainForm.js
// "use client";

// import React from "react";
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
// import { useForm } from "react-hook-form";
// import NameIcon from '../../../public/NameIcon.jsx';
// import PhoneIcon from '../../../public/PhoneIcon.jsx';

// export default function MainForm({ lable }) {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
//     mode: "onChange" // Обновление валидности формы в реальном времени
//   });

//   const onSubmit = async (formData) => {
//     const data = {
//       name: formData.Name,
//       phone: formData.Phone,
//       category: lable,
//     };
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     };
  
//     try {
//       const response = await fetch('http://localhost:5000/client', options);
//       const result = await response.json();
  
//       if (response.ok) {
//         console.log(`User created: ${result.data.name}`);
//         reset();
//         onOpenChange(false); // Закрытие модального окна после успешной отправки формы
//       } else {
//         alert(`Failed to create user: ${result.error}`);
//       }
//     } catch (error) {
//       alert(`An error occurred: ${error.message}`);
//     }
//   };


//   return (
//     <>
//       <Button onPress={onOpen} color="warning" className="mx-auto text-color-white w-[150px]">Тисни щоб записатися</Button>
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
//         <ModalContent>
//           {(onClose) => (
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <ModalHeader className="flex flex-col gap-1">{lable}</ModalHeader>
//               <ModalBody>
//                 <Input
//                   {...register("Name", {
//                     required: "Обов'язкове поле",
//                     pattern: {
//                       value: /^[А-Яа-яЁёҐґІіЇїЄєA-Za-z]+$/,
//                       message: "Ім'я повинно бути без цифр"
//                     },
//                     maxLength: 10,
//                     minLength: 2
//                   })}
//                   aria-invalid={errors.Name ? "true" : "false"}
//                   autoFocus
//                   endContent={
//                     <NameIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="Name"
//                   placeholder="Enter your Name"
//                   variant="bordered"
//                 />
//                 {errors.Name && <p role="alert">{errors.Name.message}</p>}

//                 <Input
//                   {...register("Phone", {
//                     required: "Обов'язкове поле",
//                     pattern: {
//                       value: /^[0-9]+$/,
//                       message: "Номер телефона должен содержать только цифры"
//                     },
//                     maxLength: 13,
//                     minLength: 10
//                   })}
//                   aria-invalid={errors.Phone ? "true" : "false"}
//                   endContent={
//                     <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                   }
//                   label="Phone"
//                   placeholder="+380 (___) __-__-___"
//                   defaultValue="0981540120"
//                   type="tel"
//                   variant="bordered"
//                 />
//                 {errors.Phone && <p role="alert">{errors.Phone.message}</p>}
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="flat" onPress={onClose}>
//                   Відмінити
//                 </Button>
//                 <Button
//                   type="submit"
//                   color="warning"
//                   disabled={!isValid} // Блокировка кнопки, если форма не валидна
//                 >
//                   Записатись
//                 </Button>
//               </ModalFooter>
//             </form>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }