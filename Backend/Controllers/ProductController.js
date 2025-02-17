const HandleAddProduct =async (req,res)=>{
    let products= await Product.find ({})
    let id;
    if (products.length>0){

        let last_product_array=products.slice(-1)
        let last_product=last_product_array[0];
        id=last_product.id+1;

    }
    else{
        id =1
    }
    const product =new Product({
    id:id,
    name:req.body.name,
    category:req.body.category,
    old_price:req.body.old_price,
    new_price:req.body.new_price,
    image:req.body.image

    });
    console.log (product)
    await product.save()
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
}
const HandleRemoveProduct =async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log (typeof(id))
    console.log("Removed")
    res.json({
        success:true,
        name:req.body.name,
    })

}
module.exports={HandleAddProduct,HandleRemoveProduct}