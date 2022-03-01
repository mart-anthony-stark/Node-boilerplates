const jwt = require("jsonwebtoken");

const createToken = (body) => {
  return jwt.sign(body, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = {
  createToken,
};
