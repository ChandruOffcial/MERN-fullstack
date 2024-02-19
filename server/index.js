const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

// Middle ware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/", require("./Routes/authRoutes"));

// DATA BASE
mongoose
  .connect(process.env.DATA_BASE)
  .then(() => {
    console.log("Data Base is connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Data base Connection Error", err);
  });
