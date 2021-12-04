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

    allUsers: async (_, args) => {
        const userData = await User.find({}).select('-__v -password');
        return userData;
      },
    // getFriends: async (parent, args, context) => {
    //   if (context.user) {
    //     const userData = await User.find({ _id: context.user._id }).select('-__v -password');

    //     return userData.friends;
    //   }
    // },
    findFriends: async (parent, args, context) => {
    const { search = ""} = args;

      const friendData = await User.find({
      $or: [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { username: { $regex: search, $options: 'i' } },
      ],
    }).select('-__v -password');

    return friendData;
    },

    findaltrules: async (parent, args) => {
      console.log('Hello World');
        return Altrules.find();
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

    addFriend: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { friends: args.friendId } },
          { new: true }
        );
      }
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
        return updatedUser;
        }
      }
    },
    addTie: async (parent, { tieData }, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id });
        const userGames = user.ties;
        const currentGame = userGames.find(tie => tie.game === tieData.game);
        if(currentGame) {
          const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $inc: { ties: 1 } },
          { new: true }
        );
        return updatedUser;
        }else{
          const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { ties: tieData } },
          { new: true }
        );
        return updatedUser;
        }
      }
    },

    addRules: async (parent, args) => {
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
