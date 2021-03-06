import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $username
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_WIN = gql`
  mutation addWin(
    $firstName: String!
    $game: String!
  ) {
    addWin(firstName: $firstName, game: $game) {
      _id
      firstName
      lastName
      wins{
        game
        wins
      }
    }
  }`;

export const ADD_LOSS = gql`
  mutation addLoss(
    $firstName: String!
    $game: String!
  ) {
    addLoss(firstName: $firstName, game: $game) {
      _id
      firstName
      lastName
      losses{
        game
        losses
      }
    }
  }`;

export const ADD_TIE = gql`
  mutation addTie(
    $firstName: String!
    $game: String!
  ) {
    addTie(firstName: $firstName, game: $game) {
      _id
      firstName
      lastName
      ties{
        game
        ties
      }
    }
  }`;

export const ADD_FRIEND = gql`
  mutation addFriend(
    $friendID: ID!
  ) {
    addFriend(
      friendID: $friendID
    ) {
      _id
      firstName
      lastName
      email
      username
      
    }
  }
`;

export const ADD_ALTRULES = gql`
  mutation addRules(
    $game_id: String!,
    $user: String!,
    $description: String!,
    $rule_set_name: String!
    ) {
      addRules(
        game_id: $game_id,
        user: $user,
        description: $description,
        rule_set_name: $rule_set_name
      ) {
        _id
        game_id
        user
        description
        rule_set_name
      }
    }
`;
