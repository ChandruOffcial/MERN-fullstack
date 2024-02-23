const path = require("path");
const fs = require("fs");
const Image = require("../models/image");

const imageUpload = async (req, res) => {
  console.log(req.file);

  try {
    const imageDetails = {
      file: req.file.filename,
      userId: req.body.userId,
      upload: req.body.upload,
    };
    await Image.create(imageDetails);
    res.json({ success: "Image uploaded to the database" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Image upload failed" });
  }
};

const getProfileImage = async (req, res) => {
  const userId = req.params.userId;
  try {
    if (!userId) {
      return res.status(400).json({
        error: "User ID not provided",
      });
    }
    const data = await Image.findOne({ userId });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const profileUpdate = async (req, res) => {
  try {
    const reqId = req.body.userId;
    const fileName = req.body.oldImage;
    console.log(req.body);
    fs.rm(
      path.join(__dirname, "../../client/", "src", "profiles", `${fileName}`),
      (err) => {
        if (err) {
          console.error("Error removing file:", err);
          return;
        }
        console.log("File removed successfully.");
      }
    );
    const imageDetails = {
      file: req.file.filename,
      userId: req.body.userId,
      upload: req.body.upload,
    };
    const updated = await Image.findOneAndUpdate(
      { userId: reqId },
      imageDetails,
      {
        new: true,
      }
    );
    res.json({ updated, success: "Update Completed" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  profileUpdate,
  getProfileImage,
  imageUpload,
};
