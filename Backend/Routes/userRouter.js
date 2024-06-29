const express=require('express')
const { HandleSignupController, HandleLoginController } = require('../Controllers/UserController')
const router =express.Router()

router .post("/signup",
    HandleSignupController
)
router.post('/login',HandleLoginController)


module.exports=router