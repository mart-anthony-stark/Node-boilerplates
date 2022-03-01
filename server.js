const express = require("express");
const init = require("./utils/init");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello express");
});

init(app);
