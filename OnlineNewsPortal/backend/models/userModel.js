const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
 
  email: String,
  username: String,
  password: String,
  age: Number,
  avatar: String,
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("user", mySchema);

module.exports = myModel;
