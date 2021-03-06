const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  title: String,
  summary: String,
  categorystate: String,
  subCategory: String,
  thumbnail: String,
  tags: Array,
  uploadedBy: { type: mongoose.Types.ObjectId, ref: "reporters" },

  createdAt: { type: Date, default: new Date() },

  approvenews: { type: Boolean, default: false },
});

const myModel = mongoose.model("newscurrent", mySchema);

module.exports = myModel;
