const PORT =4000;
const express=require("express")
const multer =require("multer")
const mongoose =require("mongoose")
const cors =require("cors")
const path =require("path")
const jwt=require("jsonwebtoken");
const { log, error } = require("console");
const exp = require("constants");
const morgan=require('morgan')
const dbConnect  = require("./Models/databaseConfig");
const { Product } = require("./Models/ProductModel");

const app=express()
app.use(morgan('dev'))
app.use (express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.send("app is running")
})

dbConnect();



app.use('/',require('./Routes/userRouter'))
app.use('/',require('./Routes/productRouter'))
// For image Uploading
const storage =multer.diskStorage({
    destination: path.join(__dirname, 'upload', 'images'),
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload =multer({storage:storage})



//creating upload api
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res,err)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
    console.log(`http://localhost:${PORT}/images/${req.file.filename}`);
})


app.listen(PORT,(err)=>{
    if(!err)
    console.log("server is running on port ");
else console.log("error while running",{err});

})
