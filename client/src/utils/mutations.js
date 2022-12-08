import { gql } from "@apollo/client";

export const SAVE_BOOK = gql`
  mutation saveBook($data: BookInput!) {
    saveBook(data: $data) {
      _id
      username
      email
      savedBooks {
        _id
        description
        bookId
        image
        link
        title
        authors
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        _id
        description
        bookId
        image
        link
        title
        authors
      }
    }
  }
`;
