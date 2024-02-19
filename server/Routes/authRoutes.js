const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  resgisterUser,
  loginUser,
} = require("../controller/authController");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/", test);
router.post("/register", resgisterUser);
router.post("/login", loginUser);

module.exports = router;
