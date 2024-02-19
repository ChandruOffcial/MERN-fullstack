const { hashedPassword, comparePassword } = require("../helper/helper");
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
      const hasdpassword = await hashedPassword(password);

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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({
        error: "Incorrect password",
      });
    } else {
      return res.json({
        message: "User Login Successful",
      });
    }
  } catch (error) {
    console.error("Error in loginUser:", error);
  }
};

module.exports = {
  test,
  resgisterUser,
  loginUser,
};
