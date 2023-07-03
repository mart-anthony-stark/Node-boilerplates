import { Schema, model } from "mongoose";
import { DocumentResult } from "../types";

export interface IPost extends DocumentResult<IPost> {
  title: string;
  body: string;
}

const PostSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IPost>("Post", PostSchema);
