import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $fullName: String!) {
    CreateUser(
      email: $email
      password: $password
      fullName: $fullName
      role: User
    ) {
      ok
      error
    }
  }
`;
