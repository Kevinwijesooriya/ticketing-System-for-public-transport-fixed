import mongoose from "mongoose";
const { Schema, model } = mongoose;

const routeScheduleSchema = new Schema(
  {
    routerId: {
      type: String,
      required: true,
      trim: true,
    },
    startDestination: {
      type: String,
      required: true,
      trim: true,
    },
    endDestination: {
      type: String,
      required: true,
      trim: true,
    },
    arrivalTime: {
      type: String,
      required: true,
    },
    departureTime: {
      type: Object,
      required: true,
    },
    busNumber: [
      {
        number: String,
      },
    ],
    availableDates: {
      type: Object,
      required: true,
    },
    overcrowded: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model("RouteSchedule", routeScheduleSchema);
