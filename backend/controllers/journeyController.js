import Journey from "../models/journey.js";

const JourneyController = {
  getOneJourney: async (req, res) => {
    const id = req.params.id;
    try {
      const post = await Journey.findOne({ userId: id, status: "onGoing" });
      res.json({ message: "Journey fetch success", data: post, status: 200 });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getJourneys: async (req, res) => {
    try {
      const posts = await Journey.find();
      res.json({ message: "Journeys fetch success", data: posts });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  createJourney: async (req, res) => {
    try {
      const { userId, startDestination, status, endDestination, amount } =
        req.body;

      if (!userId)
        return res.status(400).json({ msg: "Please fill in all fields." });

      const newJourney = new Journey({
        userId,
        status,
        startDestination,
        endDestination,
        amount,
      });
      await newJourney.save();
      res.json({
        message: "Journey create success",
        data: newJourney,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateJourney: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(
        "🚀 ~ file: journeyController.js ~ line 50 ~ updateJourney: ~ id",
        id
      );
      const { userId, startDestination, status, endDestination, amount } =
        req.body;

      await Journey.findOneAndUpdate(
        { _id: id },
        { userId, startDestination, status, endDestination, amount }
      );
      res.json({
        message: "Journey update success",
        data: { userId, startDestination, status, endDestination, amount },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteJourney: async (req, res) => {
    try {
      const id = req.params.id;

      await Journey.findByIdAndDelete({ _id: id });
      res.json({ message: "delete success !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

export default JourneyController;
