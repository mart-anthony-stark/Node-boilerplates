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
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    role: { type: String, default: "user", enum: ["user", "admin"] },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
