const mongoose = require('mongoose')

const Schema = mongoose.Schema;

var serviceSchema =  new Schema({
    service_title:String,
    img_url:String,
    description:String,

})
module.exports = mongoose.model('serviceTable',serviceSchema)