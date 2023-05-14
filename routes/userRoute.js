const express=require("express")
const { loginController, registerController } = require("../controllers/userController")
const router=express.Router()

//post route || login
router.post('/login',loginController)
//post register user
router.post('/register',registerController)
module.exports=router