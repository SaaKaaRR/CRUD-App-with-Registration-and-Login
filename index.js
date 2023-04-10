const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/post.js");
const userRoutes = require("./routes/userRoute.js");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

try {
  mongoose.connect(process.env.DB_URL, () => {
    app.listen(PORT || 5000, () => {
      console.log("Server running at port 5000");
    });
  });
} catch (error) {
  console.log(error);
}
app.use("/posts", postRoutes);
app.use("/user", userRoutes);
