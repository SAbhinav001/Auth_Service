const dotenv = require("dotenv")
const bcrypt = require("bcrypt")

dotenv.config();

module.exports={
    PORT: process.env.PORT,
    SALT :  bcrypt.genSaltSync(10)   //insted of 10 , we can send your own salt----> const saltRounds = 10;
}