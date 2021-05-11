const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const schema = require('./schema')
const serviceSchema = require('./ServiceSchema')
const locationSchema =require('./locationSchema')
const productschema = require('./productSchema')
const UserSchema = require('./UserSchema') 
// router.get('/',(req,res)=>{
//     res.send('Heyy')
// })

router.post('/addproduct',(req,res)=>{
    var newProduct = new productschema({
        id      : req.body.id,  
        name    : req.body.name,
        image   : req.body.image,
        type    : req.body.type,
        subcat  : req.body.subcat,
        desc    : req.body.desc,
    })
        newProduct.save()
        .then(newProduct=>{res.send(newProduct)}
        , (e) => {
            res.status(400).send(e);
        })
    })

router.get('/getproducts',async (req,res)=>{
    const products = await productschema.find()
    res.send(products)
})

router.post('/addlocation',(req,res)=>{
    var newLocation = new locationSchema({
        location_name:req.body.location_name,
        location_id:  req.body.location_id,
        state:        req.body.state,
        country:      req.body.country,
        map:req.body.map
    })
    newLocation.save()
    .then(newLocation=>{res.send(newLocation)}
    , (e) => {
        res.status(400).send(e);
    })
})

router.put('/getlocation',async(req,res)=>{
    const name= req.query._id;
    console.log(name)
    const location = await locationSchema.findByIdAndUpdate(req.query._id,
        {
            available_services:req.body.available_service
        })
    location.save()
    res.send(location)
})

router.get('/getlocation',async(req,res)=>{
    const locations = await locationSchema.find()
    res.send(locations)
})


router.get('/getservices',async(req,res)=>{
    const services = await serviceSchema.find()
    res.send(services)
})

router.get('/getlocservices',async(req,res)=>{
    const title = req.query.title;    
    console.log(title);
    const locservice = await serviceSchema.find({service_title:req.query.title})
    res.send(locservice)
})

router.post('/addservice',(req,res)=>{
    var newService= new serviceSchema({
        service_title:req.body.service_title,
        img_url:req.body.img_url,
        description:req.body.description,
    })
    newService.save()
    .then(newService=>{res.send(newService)},
    (e)=>{
        res.status(400).send(e);
    })
})

router.post('/addstore',(req,res)=>{
    var newStore = new schema({
        title:req.body.title,
        img_url:req.body.img_url,
        category:req.body.category,
        description:req.body.description,
        location:req.body.location,
        items:req.body.items
    })
    newStore.save()
    .then(newStore=>{res.send(newStore)}
    , (e) => {
        res.status(400).send(e);
    })
})

router.delete('/getstore',async(req,res)=>{
    const id=req.query._id;
    console.log(id)
    const store = await schema.findByIdAndRemove(req.query._id)
})

router.get('/getstores',async(req,res)=>{
    const stores =await schema.find()
    res.send(stores)
})

router.get('/getidvstore',async(req,res)=>{
    const title =req.query._id;
    console.log(title)
    const store = await schema.find({_id:title})
    res.send(store)
})

router.put('/getidvstore',async(req,res)=>{
    const id= req.query._id;
    console.log(id)
    const store = await schema.findByIdAndUpdate(req.query._id,
        {
            title:req.body.title,
            img_url:req.body.img_url,
            category:req.body.category,
            description:req.body.description,
            location:req.body.location,
            items:req.body.items
        })
    store.save()
    res.send(store)
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


router.get('/getloc',async(req,res)=>{
    const name = req.query.name;    
    console.log(name);
    const loc = await locationSchema.find({location_name:req.query.name})
    res.send(loc)
})


router.get('/getuser',async(req,res)=>{
    const user = req.query.name;
    console.log(user)
    const use = await UserSchema.find({username:req.query.name})
    res.send(use)
})

router.get('/getlocservices',async(req,res)=>{
    const title = req.query.title;    
    console.log(title);
    const locservice = await serviceSchema.find({service_title:req.query.title})
    res.send(locservice)
})

router.put('/updateuser',async(req,res)=>{
    const id= req.query.id;
    console.log(id)
    const user = await UserSchema.findByIdAndUpdate(req.query.id,
        {
            username:req.body.username,
            email:req.body.email,
            phonenumber:req.body.phonenumber,
        })
    user.save()
    res.send(user)
})
router.put('/addaddress',async(req,res)=>{
    const id= req.query.id;
    console.log(id)
    console.log(req.body.address)
    const location = await UserSchema.findByIdAndUpdate(req.query.id,
        {
            addresses:req.body.address
        })
    location.save()
    res.send(location)
})
module.exports= router   



