const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  number: Number,
  gender:String,
  age: Number,
  thumbnail: String,
  avatar: String,
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("reporter", mySchema);

module.exports = myModel;
