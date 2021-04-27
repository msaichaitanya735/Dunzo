const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var storeSchema =  new Schema({
    title:String,
    img_url:String,
    category:String,
    description:String,
    discount:String,
    location:String,
})

module.exports = mongoose.model('storeTable',storeSchema)

//forgot to export
//error with items