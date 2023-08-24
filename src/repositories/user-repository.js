const { User } = require("../models");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong on repo");
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong on repo");
      throw { error };
    }
  }
}

module.exports = UserRepository;
