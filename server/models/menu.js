const mongoose = require("mongoose");
const { Schema } = mongoose;

const menuSchema = new Schema({
  name: String,
  recipe: String,
  image: String,
  category: String,
  price: Number,
});

const Menu = mongoose.model("menus", menuSchema);

module.exports = Menu;
