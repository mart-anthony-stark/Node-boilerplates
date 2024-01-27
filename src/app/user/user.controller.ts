import { Request, Response, Router } from "express";
const UserController = Router();

UserController.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

export default UserController;
