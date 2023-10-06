const { Users } = require("../models");

class UsersRepository {


        // ------------------------- Register User  ------------------------- //
    
        static async createNewUser({username, password }) {
            const createdUser = Users.create({
                username,
                password
            });
    
            return createdUser;
        };
        
        // ------------------------- End Register User  ------------------------- //
    

    // ------------------------- Get User By Username  ------------------------- //

    static async getUserByUsername({ username }) {
        const getUserUsername = await Users.findOne({
            where: {
                username: username
            }
        });

        return getUserUsername;
    };

    // ------------------------- End Get User By Username  ------------------------- //


};

module.exports = UsersRepository;