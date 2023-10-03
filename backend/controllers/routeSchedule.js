import RouteSchedule from "../models/routeSchedule.js";

const routeScheduleController = {
  getOneRouteSchedule: async (req, res) => {
    const id = req.params.id;
    try {
      const post = await RouteSchedule.findOne({ _id: id });
      res.json({ message: "Route Schedule fetch success", data: post });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getRouteSchedules: async (req, res) => {
    try {
      const posts = await RouteSchedule.find();
      res
        .status(200)
        .json({ message: "Route Schedules fetch success", data: posts });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  getNonCrowdedRouteSchedules: async (req, res) => {
    try {
      const posts = await RouteSchedule.find({ overcrowded: false });
      res
        .status(200)
        .json({ message: "Route Schedules fetch success", data: posts });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  createRouteSchedule: async (req, res) => {
    try {
      const {
        routerId,
        startDestination,
        endDestination,
        arrivalTime,
        departureTime,
        busNumber,
        availableDates,
      } = req.body;
      const ExistingPost = await RouteSchedule.findOne({ routerId });
      if (ExistingPost)
        return res.status(400).json({
          message:
            "Someone has a schedule with the same router Id. Please use another router Id.",
        });

      if (
        !routerId ||
        !startDestination ||
        !endDestination ||
        !arrivalTime ||
        !departureTime ||
        !busNumber ||
        !availableDates
      )
        return res.status(400).json({ msg: "Please fill in all fields." });

      const newRouteSchedule = new RouteSchedule({
        routerId,
        startDestination,
        endDestination,
        arrivalTime,
        departureTime,
        busNumber,
        availableDates,
      });
      await newRouteSchedule.save();
      res.json({
        message: "Route Schedule create success",
        data: newRouteSchedule,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateRouteSchedule: async (req, res) => {
    try {
      const id = req.params.id;
      const {
        routerId,
        startDestination,
        endDestination,
        arrivalTime,
        departureTime,
        busNumber,
        availableDates,
      } = req.body;

      await RouteSchedule.findOneAndUpdate(
        { _id: id },
        {
          routerId,
          startDestination,
          endDestination,
          arrivalTime,
          departureTime,
          availableDates,
        },
        { $push: { busNumber: { number: busNumber } } }
      );
      res.json({
        message: "Route Schedule update success",
        data: {
          routerId,
          startDestination,
          endDestination,
          arrivalTime,
          departureTime,
          busNumber,
          availableDates,
        },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteRouteSchedule: async (req, res) => {
    try {
      const id = req.params.id;

      await RouteSchedule.findByIdAndDelete({ _id: id });
      res.json({ message: "delete success !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  addABus: async (req, res) => {
    try {
      const id = req.params.id;
      const { busNumber } = req.body;

      const response = await RouteSchedule.findOneAndUpdate(
        { _id: id },
        { $push: { busNumber: { number: busNumber } } }
      );
      if (response) {
        await RouteSchedule.findOneAndUpdate(
          { _id: id },
          { overcrowded: false }
        );
      }
      res.json({ message: "bus added successfully !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  overcrowd: async (req, res) => {
    try {
      const id = req.params.id;
      await RouteSchedule.findOneAndUpdate(
        { routerId: id },
        { overcrowded: true }
      );
      res.status(200).json({ message: "bus route overcrowded !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

export default routeScheduleController;
