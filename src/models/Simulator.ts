import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    profile_id: { type: Schema.Types.ObjectId, ref: "profile", required: true },
    dateRecorded: Date,
    cryptocurrency: String,
    euros: { type: Number, defaultValue: 0 },
    price: { type: Number, defaultValue: 0 },
    quantity: { type: Number, defaultValue: 0 },
  },
  {
    timestamps: true,
  }
);

export const Simulator = mongoose.model("Simulator", schema);
