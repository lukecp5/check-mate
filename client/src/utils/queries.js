import { gql } from "@apollo/client";

export const USER_INFO = gql`
	{
		userInfo {
			_id
			firstName
                  lastName
			email
                  friends{
                        _id
                        firstName
                        lastName
                  }
                  wins {
                        game
                        wins
                  }
                  # losses
                  # ties
                  # avatar
		}
	}
`;


export const ALL_USERS = gql`
  query allUsers {
      allUsers {
            _id
            firstName
            lastName
            username
      }
      }
`;
export const FIND_ALT_RULES = gql`
      query getfindaltrules {
            findaltrules {
                  _id
                  game_id
                  user
                  description
                  rule_set_name
            }
      }
`;
