import User from "../models/userModel.mjs";

const createOTP = async (req, res, next) => {
  try {
    const { _id } = req.body.user;

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const user = await User.updateOne({ _id }, { $set: { otp } });

    if (user.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "User not found or OTP not updated" });
    }
    req.body.user.otp = otp;


    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { createOTP };
