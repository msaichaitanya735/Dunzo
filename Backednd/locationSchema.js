const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var locationSchema =  new Schema({
    location_name:String,
    location_id:String,
    state:String,
    country:String,
    map:String
})
module.exports = mongoose.model('locationTable',locationSchema)