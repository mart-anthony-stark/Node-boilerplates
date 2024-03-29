const User = require("../models/User.model");
const { createToken } = require("../utils/token");
const bcrypt = require("bcryptjs");

module.exports = {
  signup: async (req, res) => {
    // console.log(req.body);
    try {
      const user = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);

      await user.save();
      const token = createToken(user);
      user._doc.password = undefined;
      res.status(200).send({ success: true, user: user._doc, token });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({
        $or: [{ username: email }, { email }],
      });
      if (!user)
        return res
          .status(404)
          .send({ success: false, msg: "Account not found" });

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword)
        return res
          .status(401)
          .send({ success: false, msg: "Incorrect password" });

      const token = createToken(user);
      user._doc.password = undefined;
      res.status(200).send({ success: true, user: user._doc, token });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
