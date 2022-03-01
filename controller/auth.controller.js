const User = require("../models/User.model");
const { createToken } = require("../utils/token");
const bcrypt = require("bcryptjs");

module.exports = {
  signup: async (req, res) => {
    try {
      const user = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.password, salt);

      await user.save();
      const token = createToken(user);
      user._doc.password = undefined;
      reply.status(200).send({ success: true, user: user._doc, token });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
