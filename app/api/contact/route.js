import nodemailer from "nodemailer";

// Настройка Nodemailer с использованием SMTP сервера Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Ваш email
    pass: process.env.GMAIL_PASS, // Пароль приложения (создайте его в Google Account)
  },
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Настройки для отправки письма
    const mailOptions = {
      from: process.env.GMAIL_USER, // От кого письмо
      to: "your-receiver-email@gmail.com", // Кому отправляем
      subject: "Новая форма с вашего сайта", // Тема письма
      text: `
        Имя: ${body.name}
        Email: ${body.email}
        Телефон: ${body.phone}
        Сообщение: ${body.textarea}
      `,
    };

    // Отправка письма
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}



// import mongoose from "mongoose";

// // Подключение к MongoDB
// const mongoUri = process.env.MONGODB_URI; 

// async function connectDB() {
//   if (mongoose.connection.readyState === 0) {
//     try {
//       await mongoose.connect(mongoUri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log("Connected to MongoDB");
//     } catch (error) {
//       console.error("MongoDB connection error:", error);
//     }
//   }
// }

// // Пример модели данных
// const UserSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     textarea: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User = mongoose.models.User || mongoose.model("User", UserSchema);

// // Обработка POST запроса
// export async function POST(req) {
//   await connectDB(); // Подключение к базе данных

//   try {
//     const body = await req.json(); // Получение данных из запроса
//     const newUser = new User(body); // Создание нового пользователя
//     await newUser.save(); // Сохранение в MongoDB

//     return new Response(JSON.stringify({ data: newUser }), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
