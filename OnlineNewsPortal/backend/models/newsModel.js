const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  title: String,
  summary: String,
  category: String,
  subCategory: String,
  thumbnail: String,
  tags: Array,
  uploadedBy: {type : mongoose.Types.ObjectId, ref:'reporters'},
  
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("users", mySchema);

module.exports = myModel;