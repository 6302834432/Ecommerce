const mongoose=require('mongoose');
const all_product = require('../data/all_products');
const { Product } = require('./ProductModel');

const dbConnect=async ()=>{
    
    mongoose.connect("mongodb://127.0.0.1:27017/Products")
    await dataseeding()
}

module.exports=dbConnect

const dataseeding=async ()=>{
    const items = await Product.countDocuments();
  if (items > 0) {
    console.log('Foods seed is already done!');
    return;
  }
    for (const item of all_product) {
        const product =new Product(item)
        await product.save()
    }
      console.log('Foods seed Is Done!');
}