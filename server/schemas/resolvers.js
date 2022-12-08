const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args) => {
            if (args.user) {
                return User.findOne({_id: args.user._id}).select('-__v -password');
            }
            throw new AuthenticationError("Login to continue")
        }
    },

    Mutation: {
        addUser: async ( parent, {username, email, password}) => {
            const user = await User.create({username, email, password});
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("No user found with this email address");
            }
            const token = signToken(user);
            return { token, user }
        },

        saveBook: async (parent, { data }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { _id: context.user._id },
                {
                $push: { savedBooks: data },
                },
                {
                new: true,
                }
            )
            .populate("books");
            }
            throw new AuthenticationError("Log In to Continue");
        },
    
        removeBook: async (parent, {bookId}, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { _id: context.user._id },
                {
                $pull: { savedBooks: {bookId} },
                },
                {
                new: true,
                }
            );
            }
            throw new AuthenticationError("Log In to Continue");
            },
        },

    };

    module.exports =resolvers;