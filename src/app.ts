import express, { Application } from "express";
import init from "./utils/init";
import * as dotenv from "dotenv";
import homeRouter from "./routes/home.route";
import db from "./utils/database";
dotenv.config({});

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", homeRouter);
app.get("/admin", (req, res) => {
  db.query("SELECT * FROM admin", (err, rows) => {
    if (err) return res.send(err);
    res.send(rows);
  });
});

init(app);
