const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./api/routes/user");

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://ecommerce:Ecommerce@cluster0.z3qj8nv.mongodb.net/",
  { useNewUrlParser: true }
);

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  return res.end("Hello World");
});

module.exports = app;
