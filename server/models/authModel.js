const mongoose = require("mongoose");
const { Schema } = mongoose;

const registerSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", registerSchema);
module.exports = User;
