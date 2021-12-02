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
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
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
  $game: String!
  ) {
    addWin(
      game: $game) {
      _id
      firstName
      lastName
      email
      wins{
        game
        wins
      }
      losses{
        game
        losses
      }
      ties{
        game
        ties
      }
    }
  }}`;

export const ADD_LOSS = gql`
  mutation addLoss(
  $game: String!
  ) {
    addLoss(
      game: $game) {
        _id
        firstName
        lastName
        email
        wins{
          game
          wins
        }
        losses{
          game
          losses
        }
        ties{
          game
          ties
        }

    }
  }
  `;

  export const ADD_TIE = gql`
  mutation addTie(
  $game: String!
  ) {

  }
  `;