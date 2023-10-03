import mongoose from "mongoose";
const { Schema, model } = mongoose;

const inspectorSchema = new Schema(
  {
    inspectorId: {
      type: String,
      required: true,
      trim: true,
    },
    NicNumber: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    busNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Inspector", inspectorSchema);
