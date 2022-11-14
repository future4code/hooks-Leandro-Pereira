export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface editUser {
  name: string;
  email: string;
  id: string;
}

export interface createUser {
  name: string;
  email: string;
  password: string;
}

export interface InputDto {
  name: string;
  email: string;
  password: string;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

export interface UpdateUserInputDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
}

export interface UpdateUserInput {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type AuthenticationData = {
  id: string;
};
