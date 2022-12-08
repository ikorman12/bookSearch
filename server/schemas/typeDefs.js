const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        password: String!
        email: String!
        savedBooks: [Book]!
    }

    type Book {
        _id:ID
        authors: [String]!
        description: String!
        title: String!
        description: String!
        image: String
        link: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    input BookInput {
        descirption: String!
        bookId: String!
        image: String
        link: String
        title: String!
       
        
    type Query {
        me: User
    }

    type mutation {
        addUser(username:Stting!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(data: BookInput):User
        removeBook(bookId: ID!): User
    }
    `;

    module.exports = typeDefs;
