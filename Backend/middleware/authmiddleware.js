const jwt=require('jsonwebtoken')
const authMid=async (req,res,next)=>{
    const token =req.header('auth-token')
    if(!token){
        return res.status(401).send({
            error:"Please Provide a Valid authentication token"
        })
    }
    else {
        try {
            const data =jwt.verify(token,'secret_ecom')
            const compare=data.user===req.user
            if (compare){
                next()
            }
            else{
                return res.status(401).send({
                    error:"Please Provide a Valid authentication token"
                }) 
            }
        } catch (error) {
            console.log (error)
        }
    }
}
module.exports={authMid}