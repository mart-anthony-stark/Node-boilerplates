import express, { Application } from "express";
import init from "./utils/init";
import * as dotenv from "dotenv";
import authRoute from "./routes/auth.route";
dotenv.config({});

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
init(app);

app.use("/auth", authRoute);
import postRoute from "./routes/posts.route";
app.use("/post", postRoute);
