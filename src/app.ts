import express, { Application } from "express";
import init from "./utils/init";
import * as dotenv from "dotenv";
import postsRouter from "./routes/posts.route";
import authRouter from "./routes/auth.route";
dotenv.config({});

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/posts", postsRouter);

init(app);
