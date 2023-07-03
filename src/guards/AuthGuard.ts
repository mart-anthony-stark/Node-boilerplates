import { NextFunction, Request, Response } from "express";
import { IUserRequest } from "../types";
const jwt = require("jsonwebtoken");

interface IJwtError {
  message: string;
}
interface IJwtDecodedToken {
  body: Object;
}

const AuthGuard = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res
        .status(401)
        .send({ message: "Authorization token required! Please login first" });

    const token = authHeader.split(" ")[1];
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      async (err: IJwtError, decoded: IJwtDecodedToken) => {
        const body = decoded?.body;
        if (!body || err) {
          return res.status(401).send({
            message: "Request is not authorized! Please login first",
            error: err.message,
          });
        }

        (req as IUserRequest).user = body;
        (req as IUserRequest).token = token;
        next();
      }
    );
  } catch (error: any) {
    res.status(401).send({
      message: "Request is not authorized! Please login first",
      error: error.message,
    });
  }
};

export default AuthGuard;
