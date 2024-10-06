import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUri =
  "mongodb+srv://maksimkryglyk:Prometey888@meseges.v08jrmf.mongodb.net/meseges?retryWrites=true&w=majority&appName=meseges";

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Сonnected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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

const User = mongoose.model("User", UserSchema);

app.post("/contact", async (req, res) => {
  console.log(req.body);
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
});


// app.get("/contact", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({ data: users });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });