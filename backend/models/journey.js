import mongoose from "mongoose";
const { Schema, model } = mongoose;

const journeySchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    startDestination: {
      type: String,
      trim: true,
    },
    endDestination: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    amount: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Journey", journeySchema);
