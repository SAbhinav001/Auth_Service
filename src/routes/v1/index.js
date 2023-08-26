const express= require("express")
const router = express.Router()
const {AuthRequestValidator} = require("../../middlewares")
const UserController = require("../../controllers/user-controller")

router.post('/signUp',AuthRequestValidator.validateUserAuth, UserController.create)
router.post('/signIn',AuthRequestValidator.validateUserAuth, UserController.signIn)
router.get('/isAuthenticated' , UserController.isAuthenticated)


module.exports = router