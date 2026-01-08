import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Links to the User model so you can populate details later
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


export const Post=mongoose.model("Post",postSchema)