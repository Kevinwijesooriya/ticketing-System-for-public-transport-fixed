import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {} from "dotenv/config";

const userController = {
  getOneUser: async (req, res) => {
    const id = req.params.id;
    console.log("getOneUser: ~ id", id);
    try {
      const user = await User.findOne({ _id: id });
      console.log("getOneUser: ~ user", user);
      res.json({ message: "User fetch success", status: 200, data: user });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json({ message: "Users fetch success", data: users });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    console.log("🚀 ~ file: user.js ~ line 28 ~ login: ~ { email, password }", {
      email,
      password,
    });

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user.id,
        email: user.email,
        userName: user.userName,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
  },
  createUser: async (req, res) => {
    try {
      const { userName, role, email, password } = req.body;
      console.log(
        "🚀 ~ file: user.js ~ line 48 ~ createUser: ~ userName, role, email, password",
        userName,
        role,
        email,
        password
      );
      const ExistingUser = await User.findOne({ email });
      if (ExistingUser)
        return res.status(400).json({
          message:
            "Someone has an account with the same email. Please use another email.",
        });

      if (!role || !userName || !password || !email)
        return res.status(400).json({ msg: "Please fill in all fields." });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        userName,
        role,
        email,
        password: hashedPassword,
      });
      const account = await newUser.save();
      if (account) {
        res.status(200).json({
          _id: account.id,
          userName: account.userName,
          role: account.role,
          email: account.email,
          token: generateToken(account._id),
        });
      } else {
        return res.status(400).json({ msg: "Invalid user data" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const id = req.params.id;
      const { userName, role, email, password } = req.body;

      await User.findOneAndUpdate(
        { _id: id },
        { userName, role, email, password }
      );
      res.json({
        message: "User update success",
        data: { userName, role, email, password },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;

      await User.findByIdAndDelete({ _id: id });
      res.json({ message: "delete success !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};

const verifyUser = async (req, res) => {
  try {
    const { id } = req.body;

    await User.findById({ _id: id });
    res.json({ message: "user validated !" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default userController;
