import { NextFunction, Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "../types/Request.types";
const jwt = require("jsonwebtoken");

export const createToken = (body: any) => {
  return jwt.sign({ body }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyToken = (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.token as string;
  if (!authHeader) return res.status(403).send({ error: "Unauthenticated" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(403).send({ error: "Invalid Token" });

    req.user = user.user;
    next();
  });
};
