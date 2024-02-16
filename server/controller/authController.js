const { hashedPassword } = require("../helper/helper");
const User = require("../models/authModel");

const test = (req, res) => {
  res.json({
    message: "router worked",
  });
};

const resgisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        error: "All Fields Are Not Filled",
      });
    } else {
      const hasdpassword = hashedPassword(password);

      const user = new User({
        name,
        email,
        password: hasdpassword,
      });

      const savedUser = await user.save();

      return res.status(200).json({
        success: "User registered successfully",
        user: savedUser,
      });
    }
  } catch (error) {
    // Handle error if any
    console.error("Error registering user:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = {
  test,
  resgisterUser,
};
