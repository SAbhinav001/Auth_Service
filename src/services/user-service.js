const UserRepository = require("../repositories/user-repository")
const jwt = require("jsonwebtoken")
const {JWT_KEY} = require("../config/serverConfig")
const bccypt = require( "bcrypt");

class UserService{

    constructor(){
        this.userRepository = new UserRepository()
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
          } catch (error) {
            console.log("something went wrong on service");
            throw error;
          }
    }

    async signIn(email, plainpassword){
      try {
     
        // step1 --> fetch user detils by email
        const user = await this.userRepository.getByEmail(email)
         // step2 --> compare pawword with encypted password
         const password=  this.checkPassword(plainpassword, user.password)
         if(!password){
          console.log("password not match")
          throw {error:"incoreect password"}
         } 
         //step3---> if pwd matvch thren create token
        const newjwt = this.createToken({email:user.email, id:user.id})
        return newjwt



      } catch (error) {
        console.log("went worng in sign in")
        throw error
      }
    }

     createToken(user){
       try{
        const result = jwt.sign(user, JWT_KEY , {expiresIn: '1h'});     //user--->username
        return result

       }catch(error){
        console.log("wrongin creating token")
        throw error
       }
    }

    verifytoken(token){
      try{
       const response = jwt.verify(token , JWT_KEY)
        return response             //will give the same object

       }catch(error){
        console.log("wrongin creating token")
        throw error
       }
    }

    checkPassword(userInputPasserod, encryptedPassword){
        try {
          return bccypt.compareSync(userInputPasserod, encryptedPassword)
        } catch (error) {
          console.log("wrong in comparing pasword")
          throw error
        }
    }

    /**
     * createtoken and checkpasseord use only in this lass only, so we can make it private......
     */
}

module.exports = UserService