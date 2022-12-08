const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type: User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    recentSearches: [searchSchema]!
  }

  type searchSchema {
    searchId: ID
    searchQuery: String
    location: String
    username: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    trips(username: String!): [Trip]
    trip(tripId: ID!): Trip
    me: User
  }

  type Mutation {
    addUser(
        firstName: String!, 
        lastName: String!,
        username: String!, 
        email: String!, 
        password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrip(userQuery: String!, userSearch: String!, createdAt: String)
  }
`;

module.exports = typeDefs;