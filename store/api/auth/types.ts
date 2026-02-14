import { UserI } from "@/types/user.types";

export interface AuthResponseI extends UserI {
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequestI {
  username: string;
  password: string;
}

export interface SignupRequestI {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}