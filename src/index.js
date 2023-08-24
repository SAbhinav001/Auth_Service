const bodyparser = require("body-parser")
const express = require("express")
const {PORT} = require("./config/serverConfig")
const app = express()

const apiroutes  = require("./routes/index")

const prepareAndStartServer= ()=>{

    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))

    app.use('/api' , apiroutes)

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
    })


}

prepareAndStartServer()