const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
  file: String,
  userId: String,
  upload: Boolean,
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
