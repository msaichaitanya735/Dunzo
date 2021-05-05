const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var prodcuctSchema =  new Schema({
    id:String,
    name:String,
    image:String,
    type:String,
    subcat:String,
    desc:String
})
module.exports = mongoose.model('productsTable',prodcuctSchema)