import express from "express";
import init from "./utils/init";
import * as dotenv from "dotenv";
dotenv.config({});
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./routes/home.route"));

init(app);