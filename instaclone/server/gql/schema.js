const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID
        name: String
        username: String
        email: String
        avatar: String
        siteWeb: String
        description: String
        password: String
        createAt: String
    }
    type Token{
        token: String
    }
    input LoginInput {
        email: String!
        password: String!
    }

    input UserInput {
        name: String!
        username: String!
        email: String!
        password: String!
    }

    type Query {
        getUser: User
    }

    type Mutation {
        register(input: UserInput): User
        login(input: LoginInput): Token
    }
`;

module.exports = typeDefs;