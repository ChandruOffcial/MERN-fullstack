const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, resgisterUser } = require("../controller/authController");

router.use(
  cors({
    origin: "",
    credentials: true,
  })
);

router.get("/", test);
router.post("/register", resgisterUser);

module.exports = router;
