const express = require('express')
const mongoose= require('mongoose')
const router = require('./router')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const path = require('path')

const port = process.env.PORT
console.log(port)
app.use(express.json()) 
app.use(cors())


mongoose.connect("mongodb://cts_proj:12345@cluster0-shard-00-00.6jokf.mongodb.net:27017,cluster0-shard-00-01.6jokf.mongodb.net:27017,cluster0-shard-00-02.6jokf.mongodb.net:27017/storeDB?ssl=true&replicaSet=atlas-mh07w4-shard-0&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Mongo DB Connected"))
        .catch(err => {
            console.log(err);
        })

app.use('/',router)

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../Frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'../Frontend/build/index.html'))
    })
}
else{
    app.get("/dev",(req,res)=>{
        res.send("API running")
    })
}

app.listen(port,()=>{console.log('App is running on port 5000')})

