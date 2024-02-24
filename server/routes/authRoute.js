const express = require("express");
const router = express.Router();
const cors = require("cors");
const multer = require("multer");

// Middelware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// User Controller
const {
  userRegister,
  userLogin,
  userProfile,
  userLogout,
} = require("../controller/authController");

// Image Controller
const {
  imageUpload,
  getProfileImage,
  profileUpdate,
} = require("../controller/profileController");

//Menu

const { getAllMenu, addMenu } = require("../controller/menuController");

const { storage } = require("../helper/multer");
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

// User authentication
router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/profile", userProfile);
router.get("/logout", userLogout);

// Profile Upload
router.post("/upload", upload.single("file"), imageUpload);
router.patch("/update", upload.single("file"), profileUpdate);
router.get("/profile-image/:userId", getProfileImage);

// All Menu
router.get("/menu", getAllMenu);
router.post("/menu", addMenu);

module.exports = router;
