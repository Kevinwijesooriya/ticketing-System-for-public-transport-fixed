import Driver from "../models/driver.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {} from "dotenv/config";

const driverController = {
  getOneDriver: async (req, res) => {
    const id = req.params.id;
    try {
      const driver = await Driver.findOne({ _id: id });
      res.json({ message: "Driver fetch success", data: driver });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getDrivers: async (req, res) => {
    try {
      const driver = await Driver.find();
      res.json({ message: "Drivers fetch success", data: driver });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  createDriver: async (req, res) => {
    try {
      const {
        driverName,
        dEmail,
        dPhoneNumber,
        dPassword,
        dAddress,
        dNic,
        dBusNo,
      } = req.body;
      const ExistingUser = await Driver.findOne({ dEmail });
      if (ExistingUser)
        return res.status(400).json({
          message:
            "Someone has an account with the same email. Please use another email.",
        });

      if (
        !driverName ||
        !dEmail ||
        !dPhoneNumber ||
        !dPassword ||
        !dAddress ||
        !dNic ||
        !dBusNo
      )
        return res.status(400).json({ msg: "Please fill in all fields." });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(dPassword, salt);

      const newUser = new Driver({
        driverName,
        dEmail,
        dPhoneNumber,
        dAddress,
        dNic,
        dBusNo,
        dPassword: hashedPassword,
      });
      const account = await newUser.save();
      if (account) {
        res.status(200).json({
          _id: account.id,
          driverName: account.driverName,
          dEmail: account.dEmail,
          dPhoneNumber: account.dPhoneNumber,
          dAddress: account.dAddress,
          dNic: account.dNic,
          dBusNo: account.dBusNo,
          token: generateToken(account._id),
        });
      } else {
        return res.status(400).json({ msg: "Invalid user data" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateDriver: async (req, res) => {
    try {
      const id = req.params.id;
      const {
        driverName,
        dEmail,
        dPhoneNumber,
        dAddress,
        dNic,
        dBusNo,
        dPassword,
      } = req.body;

      await Driver.findOneAndUpdate(
        { _id: id },
        { driverName, dEmail, dPhoneNumber, dAddress, dNic, dBusNo, dPassword }
      );
      res.json({
        message: "User update success",
        data: {
          driverName,
          dEmail,
          dPhoneNumber,
          dAddress,
          dNic,
          dBusNo,
          dPassword,
        },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;

      await Driver.findByIdAndDelete({ _id: id });
      res.json({ message: "delete success !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default driverController;
