const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
    user:"",
  
  uploadedBy: {type : mongoose.Types.ObjectId, ref:'reporters'},
  
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("news", mySchema);

module.exports = myModel;