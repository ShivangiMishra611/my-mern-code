const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  title: String,
  summary: String,
  category: String,
  subCategory: String,
  thumbnail: String,
  tags: Array,
  uploadedBy: { type: mongoose.Types.ObjectId, ref: "reporters" },

  createdAt: { type: Date, default: new Date() },

  approvenews: { type: Boolean, default: false },
});

const myModel = mongoose.model("newsLucknow", mySchema);

module.exports = myModel;