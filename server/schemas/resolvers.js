const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Trip } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('recentSearches');
    },
    trip: async (parent, { searchId }) => {
      return Trip.findOne({ searchId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('recentSearches');
      }
      throw new AuthenticationError('Please login first.');
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, username, email, password }) => {
      const user = await User.create({ username, firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      console.log(username);
      console.log(password);

      // Stretch goal, login with either username or email
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError('User not found');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);

      return { token, user };
    },
    addTrip: async (parent, { userId, searchQuery, location }, context) => {
      if (context.user) {
        const trip = await User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { 
              recentSearches: { searchQuery, location },
            },
          },
            {
              new: true,
              runValidators: true,
            }
        );

        return trip;
      }
      throw new AuthenticationError('Must be logged in to save a trip!');
    }
  },
};

module.exports = resolvers;