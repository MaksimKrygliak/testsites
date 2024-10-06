import mongoose from "mongoose";
import cors from "cors";

// Подключение к базе данных должно быть выполнено один раз
const mongoUri =
  "mongodb+srv://maksimkryglyk:Prometey888@meseges.v08jrmf.mongodb.net/meseges?retryWrites=true&w=majority&appName=meseges";

let isConnected = false; // Используется для проверки, установлено ли соединение с базой данных

const connectDB = async () => {
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    throw err;
  }
};

// Определение схемы пользователя
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    textarea: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

// Экспортируемая функция для Vercel
export default async function handler(req, res) {
  await connectDB(); // Подключаемся к базе данных

  cors()(req, res, async () => {
    if (req.method === "POST") {
      // Обработка POST-запросов
      try {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          textarea: req.body.textarea,
        });
        await newUser.save();
        res.status(201).json({ data: newUser });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  });
}
