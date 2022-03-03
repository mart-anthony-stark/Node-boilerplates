const db = require("../utils/database");

module.exports = {
  getHome: (req, res) => {
    db.query("SELECT * from admin", (err, rows) => {
      if (err) return res.send(err);
      res.send(rows);
    });
  },
};
