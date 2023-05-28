const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    role: { type: String, default: "user", enum: ["user", "admin"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
