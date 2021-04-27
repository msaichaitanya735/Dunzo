const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const schema = require('./schema')

router.get('/',(req,res)=>{
    res.send('Heyy')
})

router.post('/addstore',(req,res)=>{
    var newStore = new schema({
        title:req.body.title,
        img_url:req.body.img_url,
        category:req.body.category,
        description:req.body.description,
        discount:req.body.discount,
        location:req.body.location
    })
    newStore.save()
    .then(newStore=>{res.send(newStore)}
    , (e) => {
        res.status(400).send(e);
    })
})

router.get('/getstores',async(req,res)=>{
    const stores =await schema.find()
    res.send(stores)
})

router.get('/getrestraunts',async(req,res)=>{
    const stores =await schema.find({category:'restaunt'})
    res.send(stores)
})

router.get('/getgroceries',async(req,res)=>{
    const stores =await schema.find({category:'Groceries & Essentials'})
    res.send(stores)
})

router.get('/getvegies',async(req,res)=>{
    const stores =await schema.find({category:'Fruits & Vegetables'})
    res.send(stores)
})

router.get('/getmeat',async(req,res)=>{
    const stores =await schema.find({category:'Meat & Fish'})
    res.send(stores)
})


module.exports= router    