const express = require("express");
const init = require("./utils/init");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello express");
});

init(app);
