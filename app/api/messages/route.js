import mongoose from "mongoose";

// Конфигурация MongoDB
const mongoUri =
  "mongodb+srv://maksimkryglyk:Prometey888@meseges.v08jrmf.mongodb.net/meseges?retryWrites=true&w=majority&appName=meseges";

// Модель пользователя
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

// Проверка, подключена ли модель
const User = mongoose.models.User || mongoose.model("User", UserSchema);

// Функция для подключения к MongoDB (чтобы избежать повторных подключений)
async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (err) {
      console.error("MongoDB connection error:", err);
    }
  }
}

// Обработка POST запроса для создания нового пользователя
export async function POST(request) {
  await connectDB(); // Подключаемся к MongoDB

  try {
    const body = await request.json();
    const newUser = new User({
      name: body.name,
      email: body.email,
      phone: body.phone,
      textarea: body.textarea,
    });

    await newUser.save();

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

// Обработка GET запроса для получения всех пользователей
export async function GET() {
  await connectDB(); // Подключаемся к MongoDB

  try {
    const users = await User.find();
    return new Response(JSON.stringify({ data: users }), {
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
