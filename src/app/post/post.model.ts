import { Schema, Types, model } from "mongoose";

const PostSchema = new Schema(
    {
      // title: {
      //   type: String,
      //   required: true,
      // },
      // body: {
      //   type: String,
      //   required: true,
      // },
    },
    { timestamps: true }
  );

export const PostModel = model("Post", PostSchema);
