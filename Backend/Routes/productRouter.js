const express=require('express');
const { Product } = require('../Models/ProductModel');
const { HandleAddProduct, HandleRemoveProduct } = require('../Controllers/ProductController');
const { User } = require('../Models/UserModel');
const router =express.Router()
const jwt=require('jsonwebtoken')
const secretkey="secret_ecom"
router.post("/addproduct",HandleAddProduct)
router.post ("/removeproduct",HandleRemoveProduct)
const authMid=async (req,res,next)=>{
    const token =req.header('auth-token')
    if(!token){
        return res.status(401).send({
            error:"Please Provide a Valid authentication token"
        })
    }
    else {
        try {
            const data =jwt.verify(token,secretkey)
            req.user=data.user
            next()
            
        } catch (error) {
            console.log (error)
        }
    }
}

// creating new collection api
router.get('/newcollection',(req,res)=>{
    let allcollection=Product.find({});
    let newcollection =allcollection.slice(1).slice(-8)
    console.log('newcollection fetched')
    res.send(newcollection)
})

router.get("/allproducts",async (req,res)=>{
    let products= await Product.find({})
   res.send(products)
})
// creating userSchema model

router.post('/addtoCart', authMid, async (req, res) => {
    try {
        console.log(req.body.itemId);

        // Find the user by ID
        const user = await User.findOne({ _id: req.user.id });

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Ensure cartdata is an object
        if (!user.cartdata) {
            user.cartdata = {};
        }

        // Update the cartdata
        if (user.cartdata[req.body.itemId]) {
            user.cartdata[req.body.itemId] += 1;
        } else {
            user.cartdata[req.body.itemId] = 1;
        }

        // Save the updated user data
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.user.id },
            { cartdata: user.cartdata },
            { new: true }
        );

        res.status(200).send({
            success:true,
            message:"Added"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});
router.post('/removeFromCart',authMid,async (req ,res)=>{
    try {
        console.log('itemid',req.body.itemId);

        // Find the user by ID
        const user = await User.findOne({ _id: req.user.id });

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Ensure cartdata is an object
        if (!user.cartdata) {
            user.cartdata = {};
        }

        // Update the cartdata
        if (user.cartdata[req.body.itemId]) {
            user.cartdata[req.body.itemId] = 0;
        }
        

        // Save the updated user data
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.user.id },
            { cartdata: user.cartdata },
            { new: true }
        );
        res.status(200).send({
            success:true,
            message:"removed"
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
})

router.post('/cartData',authMid,async(req,res)=>{
   try {
    // Find the user by ID
    const user = await User.findOne({ _id: req.user.id });

    if (!user) {
        return res.status(404).send('User not found');
    }
    return res.json(user.cartdata)
    
   } catch (error) {
    
   }

})
module.exports=router
