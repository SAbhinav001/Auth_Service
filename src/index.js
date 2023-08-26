const bodyparser = require("body-parser")
const express = require("express")
const {PORT} = require("./config/serverConfig")
const app = express()
const {User, Role} = require("./models")
const apiroutes  = require("./routes/index")
// const db = require("./models")

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

    app.listen(PORT,   async ()=>{

        // if(process.env.DB_SYNC){
        //         db.sequelize.sync({alter:true})
        // }

        // const u1 = await User.findByPk(3)
        // const r1 = await Role.findByPk(1)
        // u1.addRoles(r1)

    // ----> above lines is for assigning roles to users , it will add into new table user_role


                //  await u1.getRoles()
                // await r1.getUsers()    or hasRole function -----see docs


        console.log(`server started at ${PORT}`
        )
    })


}

prepareAndStartServer()