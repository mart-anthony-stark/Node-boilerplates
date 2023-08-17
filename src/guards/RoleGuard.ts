import { NextFunction, type Response } from "express";

const RoleGuard =
  (...roles: Array<string>) =>
  (req: any, res: Response) => {
    return roles.includes(req.user?.role)
      ? true
      : {
          status: 403,
          message: `Unauthorized request. User must be ${roles.join(" | ")}`,
        };
  };
export default RoleGuard;
