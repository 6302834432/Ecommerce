const mongoose=require('mongoose')
const User =mongoose.model('User',{
    name :{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,

    },
    cartdata:{
        type:Object,
    },
    password:{
        type:String,
        required :true,
    },
    date:{
        type:Date,
        default:Date.now(),
    },

})
module.exports={User}