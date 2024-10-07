import mongoose from "mongoose";

// Подключение к MongoDB
const mongoUri = process.env.MONGODB_URI || "mongodb+srv://maksimkryglyk:Prometey888@meseges.v08jrmf.mongodb.net/meseges?retryWrites=true&w=majority&appName=meseges"; // Храните URI в переменной окружения

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  }
}

// Пример модели данных
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    textarea: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Создание модели или использование существующей
const User = mongoose.models.User || mongoose.model("User", UserSchema);

// Обработка POST запроса
export async function POST(request) {
  await connectDB(); // Подключение к базе данных

  try {
    const body = await request.json(); // Получение данных из запроса
    const newUser = new User(body); // Создание нового пользователя
    await newUser.save(); // Сохранение в MongoDB

    return new Response(JSON.stringify({ data: newUser }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Обработка GET запроса
// export async function GET() {
//   await connectDB(); // Подключение к базе данных

//   try {
//     const users = await User.find(); // Получение всех пользователей
//     return new Response(JSON.stringify({ data: users }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
