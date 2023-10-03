import mongoose from "mongoose";
const { Schema, model } = mongoose;

const driverSchema = new Schema(
  {
    driverName: {
      type: String,
      required: true,
      trim: true,
    },
    dEmail: {
      type: String,
      required: true,
      trim: true,
    },
    dPhoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    dPassword: {
      type: String,
      required: true,
      trim: true,
    },
    dAddress: {
      type: String,
      required: true,
    },
    dNic: {
      type: String,
      required: true,
    },
    dBusNo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Driver", driverSchema);
