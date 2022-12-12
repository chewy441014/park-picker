import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    addUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip($searchQuery: String!, $location: String!, $username: String!) {
    addTrip(searchQuery: $searchQuery, location: $location, username: $username) {
      _id
      searchQuery
      location
      username
    
      
    }
  }
`;
