const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

exports.requireAuth = async (req, reply, next) => {
  // verify authentication
  const { authorization } = req.headers;
  if (!authorization) {
    return reply
      .code(401)
      .send({ msg: "Authorization token required! Please login first" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { body } = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findOne({ _id: body._id }).select("-password");
    if (!req.user) {
      return reply
        .code(401)
        .send({ error: "Request is not authorized! Please login first" });
    }
    next();
  } catch (error) {
    console.log(error);
    return reply
      .code(401)
      .send({ error: "Request is not authorized! Please login first" });
  }
};
