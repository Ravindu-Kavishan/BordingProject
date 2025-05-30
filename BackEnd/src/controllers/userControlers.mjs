import User from "../models/userModel.mjs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const registerUser = async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
      userEmailExist,
      contactNumber,
      whatsappNumber,
    } = req.body;

    if (userEmailExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      contactNumber,
      whatsappNumber,
    });
    req.body.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { userEmailExist } = req.body;

    if (!userEmailExist) {
      return res.status(404).json({ message: "User not found." });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendUserDetails = async (req, res, next) => {
  try {
    const user = req.user;
    return res.status(200).json({ user, message: "Success." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOwner = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const id = req.user.id;

    const user = await User.updateOne(
      { _id: id },
      { $set: { name, email, password } },
      { runValidators: true }
    );
    res.status(200).json({ message: "User updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendOTPByEmail = async (req, res) => {
  try {
    const { email, otp } = req.body.user;

    const transporter = nodemailer.createTransport({
      service: "gmail", // or any other email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email option
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code From Moratuwa Bordings",
      text: `Your OTP is: ${otp}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to send OTP", error: error.message });
  }
};

const compareOTPByEmail = async (req, res) => {
  try {
    if (req.body.otp === req.body.user.otp) {
      res.status(200).json({ message: "Verification successful" });
    } else {
      res.status(401).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed", error: error.message });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.updateOne(
      { email },
      { $set: { password } },
      { runValidators: true }
    );
    res.status(200).json({ message: "Password updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const cheackUser = async (req, res) => {
  let token;

  try {
    token = req.cookies.token;
    if (!token) {
      return res.status(200).json({ valid: false });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ valid: true, user: decoded });
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export default {
  registerUser,
  loginUser,
  sendUserDetails,
  updateOwner,
  sendOTPByEmail,
  compareOTPByEmail,
  updatePassword,
  cheackUser,
};
