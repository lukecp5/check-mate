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
  }`;

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
    addTie(
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

export const ADD_FRIEND = gql`
  mutation addFriend(
    $friendId: String!
  ) {
    addFriend(
      friendId: $friendId
    ) {
      _id
      firstName
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
