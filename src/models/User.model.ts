import { Schema, model } from "mongoose";
import { DocumentResult } from "../types";

export interface IUser extends DocumentResult<IUser> {
  username: string;
  email: string;
  password?: string;
  role?: string;
}
const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Passwords should be at least 8 characters long"],
    },
    role: { type: String, default: "user", enum: ["user", "admin"] },
  },
  { timestamps: true }
);

userSchema.post("save", function (error: any, doc: any, next: any): any {
  if (error.name === "MongoServerError" && error.code === 11000) {
    if (error.message.includes("username")) {
      next(
        new Error("Username already in use. Please enter a different username.")
      );
    } else if (error.message.includes("email")) {
      next(
        new Error(
          "Email address already in use. Please enter a different email."
        )
      );
    } else {
      next(new Error("Duplicate field found. Please enter unique values."));
    }
  } else {
    next();
  }
});

export default model<IUser>("User", userSchema);
