const path = require("path");
const fs = require("fs");
const multer = require("multer");
const uploadDirectory = path.join(
  __dirname,
  "../../client/",
  "src",
  "profiles"
);

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

module.exports = {
  storage,
};
