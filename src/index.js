const bodyparser = require("body-parser")
const express = require("express")
const {PORT} = require("./config/serverConfig")
const app = express()
const {User} = require("./models")
const apiroutes  = require("./routes/index")

const prepareAndStartServer= async()=>{

    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))


    // const response = await User.findOne({
    //     where:{
    //         email: 'course@admin.com'
    //     }
    // })
    // console.log(response)

    app.use('/api' , apiroutes)

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
    })


}

prepareAndStartServer()