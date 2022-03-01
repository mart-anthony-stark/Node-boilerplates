const express = require("express");
const init = require("./utils/init");
require("dotenv").config({});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/auth", require("./routes/auth.route"));
app.use("/posts", require("./routes/posts.route"));

init(app);
