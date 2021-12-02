const { AuthenticationError } = require('apollo-server-express');
const { User, Altrules } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    userInfo: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // getFriends: async (parent, args, context) => {
    //   if (context.user) {
    //     const userData = await User.find({ _id: context.user._id }).select('-__v -password');

    //     return userData.friends;
    //   }
    // },
    findaltrules: async (parent, args, context) => {
      if (context.user) {
        const altruleData = await Altrules.findall({});

        return altruleData;
      }
      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addLoss: async (parent, { lossData }, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });
        const userGames = user.losses;
        const currentGame = userGames.find(loss => loss.game === lossData.game);
        if (currentGame) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $inc: { losses: 1 } },
            { new: true }
          )
          return updatedUser;
      }else{
          const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { losses: lossData } },
          { new: true }
        );

        return updatedUser;
        }
    }
  },
    addWin: async (parent, { winData }, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });
        const userGames = user.wins;
        const currentGame = userGames.find(wins => wins.game === winData.game);
        if (currentGame) {
          const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $inc: { ties: 1 } },
          { new: true }
        );
        return updatedUser;
        } else{
          const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { wins: winData } },
          { new: true }
        );
      }
    },
    addTie: async (parent, { tieData }, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });
        if(user.ties.game === tieData.game) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id, ties: user.ties.game },
          { $inc: { ties: 1 } },
          { new: true }
        );
        }
      }
    },

    addAltrules: async (parent, args) => {
      const altrules = await Altrules.create(args);

      return  altrules ;

    },
    // saveWin: async (parent, { winData }, context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { wins: winData } },
    //       { new: true }
    //     );

    //     return updatedUser;
    //   }
    // }

    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // removeBook: async (parent, { bookId }, context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { savedBooks: { bookId } } },
    //       { new: true }
    //     );

    //     return updatedUser;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // },
  }
}

module.exports = resolvers;
