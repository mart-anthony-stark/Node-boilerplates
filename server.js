const express = require("express");
const init = require("./utils/init");
require("dotenv").config({});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./routes/home.route"));

init(app);
