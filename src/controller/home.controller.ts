import { Request, Response } from "express";

module.exports = {
  getHome: (req: Request, res: Response) => {
    res.send("Home route");
  },
};
