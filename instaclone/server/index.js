const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolver');
require('dotenv').config();


mongoose.connect(process.env.BBDD)
    .then(() => {
        server()
    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB:', err);
    });

function server() {
    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers,
    });

    serverApollo.listen().then(({ url }) => {
        console.log(`Servidor listo en la url ${url}`);
    });
}