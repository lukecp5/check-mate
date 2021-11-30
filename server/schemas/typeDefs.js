const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    bookCount: Int
    matches: [Match]
    teams: [Team]
    games: [Game]
    wins: Int
    losses: Int
    avatar: String
  }

  type Match {
    _id: ID!
    team1: Team!
    team2: Team!
    team1Score: Int
    team2Score: Int
    winner: Team
    loser: Team
    game_id: String
  }

  type Team {
    _id: ID!
    name: String!
    members: [User]
    games: [Game]
    wins: Int
    losses: Int
  }    

  type Game {
    _id: ID!
    description: String
    game_id: String!
    name: String
    matches: [Match]
    teams: [Team]
  }

  type Auth {
    token: ID!
    user: User
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
    users: [User]
    game(_id: ID!): Game
    games: [Game]
    team(_id: ID!): Team
    match(_id: ID!): Match
    matches: [Match]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addMatch(team1: String!, team2: String!, team1Score: Int, team2Score: Int, winner: String, loser: String, game_id: String): Match
    addTeam(name: String!): Team
    # saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
