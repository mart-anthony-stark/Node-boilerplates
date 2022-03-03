const express = require("express");
const init = require("./utils/init");
const db = require("./utils/database");
require("dotenv").config({});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users", require("./routes/home.route"));
app.use("/admin", (req, res) => {
  db.query("SELECT * from admin", (err, rows) => {
    if (err) return res.send(err);
    res.send(rows);
  });
});

init(app);
