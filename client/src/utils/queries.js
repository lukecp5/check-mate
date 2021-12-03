import { gql } from "@apollo/client";

export const USER_INFO = gql`
	{
		userInfo {
			_id
			firstName
                  lastName
			email
                  # friends{
                  #       _id
                  #       firstName
                  #       lastName
                  # }
                  # wins
                  # losses
                  # ties
                  # avatar
		}
	}
`;

export const FIND_ALT_RULES = gql`
      query getfindaltrules {
            findaltrules {
                  game_id
                  user
                  description
                  rule_set_name
            }
      }
`;
