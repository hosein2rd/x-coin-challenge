import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  nickname: String,
  email: { type: String, required: true },
  capital: Number,
  divisa: String,
  prefered_cryptocurrency: String,
});

export const Profile = mongoose.model("Profile", schema);
