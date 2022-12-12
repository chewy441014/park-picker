const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    recentSearches: [Trip]
  }

  type Trip {
    _id: ID
    searchQuery: String
    location: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    me: User
    trip(tripId: ID!): Trip
  }

  type Mutation {
    addUser(
        firstName: String!, 
        lastName: String!,
        username: String!, 
        email: String!, 
        password: String!): Auth,
    login(username: String!, password: String!): Auth,
    addTrip(searchQuery: String!, location: String!, username: String!): Trip
  }
`;

module.exports = typeDefs;