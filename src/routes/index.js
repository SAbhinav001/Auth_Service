const express= require("express")
const router = express.Router()

const V1router = require("./v1/index")

router.use('/v1', V1router)

module.exports = router