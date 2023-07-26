import express, { Application } from "express";
import init from "./utils/init";
import * as dotenv from "dotenv";
dotenv.config({});

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
init(app);

import PostController from "./app/post/post.controller";
app.use("/post", PostController);