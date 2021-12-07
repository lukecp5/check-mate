import { gql } from "@apollo/client";

export const USER_INFO = gql`
	{
		userInfo {
			_id
			firstName
                  lastName
			email
                  username
                  friends{
                        _id
                        firstName
                        lastName
                        username
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
                  wins {
                        game
                        wins
                  }
                  losses {
                        game
                        losses
                  }
                  ties {
                        game
                        ties
                  }
                  # avatar
		}
	}
`;



export const FIND_FRIENDS = gql`
  query findFriends($search: String) {
    findFriends(search: $search) {
      _id
      firstName
      username
    }
  }
`;

export const GET_FRIENDS = gql`
      query getFriends {
            getFriends {
                  _id
                  firstName
                  lastName
                  email
                  username
                        friends{
                              _id
                              firstName
                              lastName
                              username
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
      query getfindaltrules($game_id: String!) {
            findaltrules(game_id: $game_id) {
                  _id
                  game_id
                  user
                  description
                  rule_set_name
            }
      }
`;
