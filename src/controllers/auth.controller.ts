import { Request, Response } from "express";

import User from "../models/User.model";
import { createToken } from "../utils/token";
const bcrypt = require("bcryptjs");

export default {
  signup: async (req: Request, res: Response) => {
    if (!req.body.password || req.body.password.length < 8) {
      return res
        .status(401)
        .send({ message: "Password must be at least 8 characters long." });
    }
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    await user.save();
    const token = createToken(user);
    user._doc.password = undefined;
    res.status(200).send({ user: user._doc, token });
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      $or: [{ username: email }, { email }],
    }).lean();
    if (!user) return res.status(404).send({ message: "Account not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).send({ message: "Incorrect password" });

    const token = createToken(user);
    user.password = undefined;
    res.status(200).send({ user, token });
  },
};
