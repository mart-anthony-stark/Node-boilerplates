import express, { Application } from "express";
import init from "./utils/init";

const dotenv = require("dotenv");
dotenv.config({});

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

init(app);
