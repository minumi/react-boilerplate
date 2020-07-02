import { gql } from 'apollo-boost';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    LoginUser(email: $email, password: $password) {
      ok
      error
      token
    }
  }
`;
