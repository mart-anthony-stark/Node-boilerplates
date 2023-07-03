import { Request } from "express";
export interface IGetUserAuthInfoRequest extends Request {
  user: any; // or any other type
}

export interface IUserRequest extends Request {
  user: unknown;
  token: string;
}
