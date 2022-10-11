import express, { Application } from "express";
import init from "./utils/init";
import * as dotenv from "dotenv";
import homeRouter from "./routes/home.route";
dotenv.config({});

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", homeRouter);

init(app);
