const express = require("express");
const init = require("./utils/init");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello express");
});

init(app);
