const { AuthenticationError } = require('apollo-server-express');
const { User, Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
          return User.find().populate('profile');
        },
        user: async (parent, { username }) => {
          return User.findOne({ username }).populate('profile');
        
        },
      },
    
};

module.exports = resolvers;
