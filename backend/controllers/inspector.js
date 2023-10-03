import Inspector from '../models/inspector.js';

const inspectorController = {
  getOneInspector: async (req, res) => {
    const id = req.params.id;
    try {
      const post = await Inspector.findOne({ _id: id });
      res.json({ message: "Inspector fetch success", data: post });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getInspectors: async (req, res) => {
    try {
      const posts = await Inspector.find();
      res.json({ message: "Inspectors fetch success", data: posts });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  createInspector: async (req, res) => {
    try {
      const {
        inspectorId,
        NicNumber,
        name,
        email,
        phoneNumber,
        address,
        password,
        busNumber,
      } = req.body;
      const ExistingInspector = await Inspector.findOne({ NicNumber });
      if (ExistingInspector)
        return res.status(400).json({
          message:
            "Someone has an account with the same NIC number. Please use another NIC.",
        });

      if (
        !inspectorId ||
        !NicNumber ||
        !name ||
        !email ||
        !phoneNumber ||
        !address ||
        !password ||
        !busNumber
      )
        return res.status(400).json({ msg: "Please fill in all fields." });

      const newInspector = new Inspector({
        inspectorId,
        NicNumber,
        name,
        email,
        phoneNumber,
        address,
        password,
        busNumber,
      });
      await newInspector.save();
      res.json({
        message: "Inspector create success",
        data: newInspector,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateInspector: async (req, res) => {
    try {
      const id = req.params.id;
      const {
        NicNumber,
        name,
        email,
        phoneNumber,
        address,
        password,
        busNumber,
      } = req.body;

      await Inspector.findOneAndUpdate(
        { _id: id },
        { NicNumber, name, email, phoneNumber, address, password, busNumber }
      );
      res.json({
        message: "Inspector update success",
        data: {
          NicNumber,
          name,
          email,
          phoneNumber,
          address,
          password,
          busNumber,
        },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteInspector: async (req, res) => {
    try {
      const id = req.params.id;

      await Inspector.findByIdAndDelete({ _id: id });
      res.json({ message: "delete success !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

export default inspectorController;