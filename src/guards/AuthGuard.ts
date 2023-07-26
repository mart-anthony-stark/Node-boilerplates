import { NextFunction, Request, Response } from "express";
import { IUserRequest } from "../types";
const jwt = require("jsonwebtoken");

interface IJwtError {
  message: string;
}
interface IJwtDecodedToken {
  body: Object;
}

const AuthGuard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return {
        status: 401,
        message: "Authorization token required! Please login first",
      };

    const token = authHeader.split(" ")[1];
    const res = await jwt.verify(token, process.env.JWT_SECRET);
    if (!res || !res.body) {
      return {
        status: 401,
        message: "Request is not authorized! Please login first",
      };
    }
    (req as IUserRequest).user = res.body;
    (req as IUserRequest).token = token;
    return true;
  } catch (error: any) {
    return {
      status: 401,
      message: "Request is not authorized! Please login first",
      error: error.message,
    };
  }
};

export default AuthGuard;
