const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserModel = new Schema({
    username:{
        type:String
    },
    password: {
        type:String
    },
    email: {
        type:String
    },
    phonenumber: {
        type:String
    },
    active:{
        type:Boolean,
        default:false
    }
});

module.exports= UserModel = mongoose.model("User",UserModel);