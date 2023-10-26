const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/user");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://siphomkhize8705:sipho2002@cluster0.fxycyto.mongodb.net/?retryWrites=true&w=majority"
);
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          res.json("Correct");
        } else {
          res.json("The password is Not the Correct password");
        }
      });
    } else {
      res.json("User Does not exist");
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ name, email, password: hash })
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err));
});

app.get("/getUsers", (req, res) => {
  UserModel.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running successfully");
});
