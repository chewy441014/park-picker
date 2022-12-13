const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Trip } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('recentSearches');
    },
    trip: async (parent, { tripId }) => {
      return Trip.findOne({ tripId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('recentSearches');
      }
      throw new AuthenticationError('Please login first.');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, firstName, lastName }) => {
      const user = await User.create({ username, email, password, firstName, lastName });
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
    addTrip: async (parent, { searchQuery, location }, context) => {
      if (context.user) {
        const trip = await Trip.create({ 
          searchQuery, 
          location,
          username: context.user.username, 
        });
      
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { recentSearches: trip._id } }
        );
        
        return trip;
      }
      throw new AuthenticationError('Must be logged in to save a trip!');
    }
  },
};

module.exports = resolvers;