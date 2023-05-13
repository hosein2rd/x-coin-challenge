import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: { type: Schema.Types.ObjectId, ref: "profile", required: true },
    name: String,
    favorite1: String,
    favorite2: String,
    favorite3: String,
  },
  {
    timestamps: true,
  }
);

export const Favorite = mongoose.model("Favorite", schema);
