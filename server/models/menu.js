const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: String,
  recipe: String,
  image: String,
  category: String,
  price: Number,
});

const Menu = mongoose.model("menu", menuSchema);

module.exports = Menu;
