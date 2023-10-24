const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://siphomkhize8705:sipho2002@cluster0.fxycyto.mongodb.net/?retryWrites=true&w=majority");
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("positive result");
      } else {
        res.json("Wrong Password");
      }
    } else {
      res.json("User Does not exist");
    }
  });
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running successfully");
});
