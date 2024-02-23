const Menu = require("../models/menu");

const getAllMenu = async (req, res) => {
  try {
    const menuData = await Menu.find();
    res.json(menuData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllMenu,
};
