const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const resolvers = {
    Query: {
        getUser: () => {
            console.log("Obteniendo usuario")
            return null;
        },
    },
    Mutation: {
        register: async (_, { input }) => {
            const newUser = input;
            newUser.email = newUser.email.toLowerCase();
            newUser.username = newUser.username.toLowerCase();

            const { email, username, password } = newUser;

            const foundEmail = await User.findOne({ email })
            if (foundEmail) throw new Error("El email ya está en uso");

            const foundUsername = await User.findOne({ username })
            if (foundUsername) throw new Error("El nombre de usuario ya está en uso");

            const salt = await bcryptjs.genSaltSync(10);
            newUser.password = await bcryptjs.hash(password, salt);

            try {
                const user = new User(newUser);
                user.save();
                return user;
            } catch (e) {
                console.log(e);
            }
        }
    }
};

module.exports = resolvers;