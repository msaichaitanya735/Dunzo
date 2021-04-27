const express = require('express')
const mongoose= require('mongoose')
const router = require('./router')
const app = express()

const port = 5000
app.use(express.json()) 

mongoose.connect("mongodb://cts_proj:12345@cluster0-shard-00-00.6jokf.mongodb.net:27017,cluster0-shard-00-01.6jokf.mongodb.net:27017,cluster0-shard-00-02.6jokf.mongodb.net:27017/storeDB?ssl=true&replicaSet=atlas-mh07w4-shard-0&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Mongo DB Connected"))
        .catch(err => {
            console.log(err);
        })

app.use('/',router)


app.listen(port,()=>{console.log('App is running on port 5000')})

//forgot to add a json middleware