// const mongoose=require('../connection');
// const mySchema=new mongoose.Schema({
//     name:String,
//     userName:String,
//     password:String,
//     age:Number,
//     createdAt:{ type:Date,default:new Date()},
// });

// const myModel=mongoose.model("users",mySchema);

// module.exports=myModel;

const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  age: Number,
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("users", mySchema);

module.exports = myModel;