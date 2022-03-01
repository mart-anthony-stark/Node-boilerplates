const jwt = require("jsonwebtoken");

const createToken = (body) => {
  return jwt.sign({ body }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) return res.status(403).send({ error: "Unauthenticated" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send({ error: "Invalid Token" });

    req.user = user.user;
    next();
  });
};

module.exports = {
  createToken,
  verifyToken,
};
