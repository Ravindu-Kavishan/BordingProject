import jwt from "jsonwebtoken";
import User from "../models/userModel.mjs";

const generateJWTToken = async (req, res) => {
  try {
    const { user } = req.body;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true, // Cannot access via JavaScript → protection against XSS attacks
      secure: process.env.NODE_ENV === "production", // Set true if in production (HTTPS only)
      maxAge: 60 * 60 * 1000, // 1 hour
    });
    res.status(201).json({
      _id: user._id,
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const authorizeWithJWT = async (req, res, next) => {
  let token;

  try {
    token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");


    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export default { generateJWTToken, authorizeWithJWT };
