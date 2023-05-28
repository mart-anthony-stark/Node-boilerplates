const { createToken } = require("../utils");
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");

const signup = async (req, reply) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return reply.code(409).send({
        success: false,
        msg: "Email address already in use. Please enter different email.",
      });
    }

    const user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    await user.save();
    const token = createToken(user);
    user._doc.password = undefined;
    reply.code(200).send({ success: true, user: user._doc, token });
  } catch (error) {
    reply.code(500).send(error);
    console.log(error);
  }
};

const login = async (req, reply) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return reply.code(404).send({
        success: false,
        msg: "Account not found! Please register first",
      });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return reply
        .code(401)
        .send({ success: false, msg: "Incorrect password. Try Again" });

    const token = createToken(user);
    user._doc.password = undefined;
    reply.code(200).send({ success: true, user: user._doc, token });
  } catch (error) {
    reply.code(500).send(error);
  }
};

module.exports = {
  signup,
  login,
};
