const express = require("express");
const router = express.Router();
const cors = require("cors");
const multer = require("multer");

const {
  userRegister,
  userLogin,
  userProfile,
  userLogout,
  imageUpload,
} = require("../controller/authController");
const { storage } = require("../helper/multer");
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/profile", userProfile);
router.get("/logout", userLogout);
router.post("/upload", upload.single("file"), imageUpload);

module.exports = router;
