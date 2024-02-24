const Menu = require("../models/menu");

const getAllMenu = async (req, res) => {
  try {
    const menuData = await Menu.find();
    res.json(menuData);
  } catch (error) {
    console.log(error);
  }
};
const addMenu = async (req, res) => {
  const { name, recipe, image, category, price } = req.body; // Destructure directly
  const data = { name, recipe, image, category, price }; // Create data object

  try {
    const newMenu = await Menu.create(data); // No need for { data }, pass data directly
    console.log(newMenu);
    res.json(newMenu);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not add menu item" }); // Sending an error response
  }
};
module.exports = {
  getAllMenu,
  addMenu,
};
