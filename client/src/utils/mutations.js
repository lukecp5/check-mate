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
