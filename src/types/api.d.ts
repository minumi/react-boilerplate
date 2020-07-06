/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: loginUser
// ====================================================

export interface loginUser_LoginUser {
  __typename: "LoginUserResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface loginUser {
  LoginUser: loginUser_LoginUser;
}

export interface loginUserVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_CreateUser {
  __typename: "CreateUserResponse";
  ok: boolean;
  error: string | null;
}

export interface createUser {
  CreateUser: createUser_CreateUser;
}

export interface createUserVariables {
  email: string;
  password: string;
  fullName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
