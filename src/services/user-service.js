const UserRepository = require("../repositories/user-repository")

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
}

module.exports = UserService