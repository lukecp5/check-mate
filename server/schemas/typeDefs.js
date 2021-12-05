const { gql } = require('apollo-server-express');

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    username: String
    wins: [ Win ]
    losses: [ Loss]
    ties: [ Tie ]
    friends: [ User ]
    avatar: String
  }

  type Win {
    _id: ID!
    game: String
    wins: Int
  }

  type Loss{
    _id: ID!
    game: String
    losses: Int
  }

  type Tie{
    _id: ID!
    game: String
    ties: Int
  }

  type Altrules {
    _id: ID!
    game_id: String!
    user: String!
    description: String!
    rule_set_name: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input WinInput {
    game: String!
    wins: Int
  }

  # input BookInput {
  #   authors: [String]
  #   description: String!
  #   bookId: String!
  #   image: String
  #   link: String
  #   title: String!
  # }

  type Query {
    me: User
    user(_id: ID!): User
    userInfo: User
    allUsers: [ User ]
    users: [User]
    getFriends: [ User ]
    findFriends(search: String): [User]
    findaltrules(game_id: String!): [Altrules]  
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): Auth

    addFriend(friendID: ID!): User
    
    addWin(firstName: String!, wins: WinInput): User
    addLoss(game: String!): User
    addTie(game: String!): User
    # addMatch(team1: String!, team2: String!, team1Score: Int, team2Score: Int, winner: String, loser: String, game_id: String): Match
    # saveBook(bookData: BookInput!): User
    addRules(game_id: String!, user: String!, description: String!,rule_set_name: String! ): Altrules
  }
`;

const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
}

module.exports = typeDefs;
