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
