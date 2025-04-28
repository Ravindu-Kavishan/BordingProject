import User from "../models/userModel.mjs";

const getUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    req.body.userEmailExist = false;
    const user= await User.findOne({ email });
    if (user) {
      req.body.userEmailExist = true;
      req.body.user = user;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {getUserByEmail};
