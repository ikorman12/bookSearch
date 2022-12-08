import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      user {
        _id
        username
        email
        savedBooks {
          bookId
          title
          authors
          description
          image
          link
        }
      }
    }
  }
`;
