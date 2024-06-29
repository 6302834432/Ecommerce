const jwt =require('jsonwebtoken')
const { User } = require('../Models/UserModel')
const secretkey='secret_ecom'

const HandleSignupController=async(req,res)=>{

    let check = await User.findOne({email:req.body.email})
    console.log(check)
    if (check){
        return res.json({
            success:false,
            error:"user already exist"
        })}
        let cart ={};
        for (let i=0;i<200;i++){
            cart[i]=0;
        }
        const user =new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            cartdata:cart,
        })
        await user.save();
        const data={
            user:{
                id:user.id
            }
        }
        const token=jwt.sign(data,secretkey)
        res.json({
            success:true,
            token
        })
        
    

}
const HandleLoginController=async (req,res)=>{
    let user = await User.findOne({email:req.body.email})
    console.log(user)
    if (user){
        const passwordCompare=user.password===req.body.password
        if (passwordCompare){
            const data={
            user:{
                id:user.id
            }
            }

            const token=jwt.sign(data,secretkey)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,error:"Wrong password"})
        }
    }
    else{
        res.json ({success:false ,error:"Wrong Email Id"})
    }
}
module.exports={HandleSignupController,HandleLoginController}