import User from "../models/userModel.mjs";

const getUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    req.body.userEmailExist = false;
    const userExists = await User.findOne({ email });
    if (userExists) {
      req.body.userEmailExist = true;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {getUserByEmail};
