import User from "../models/userModel.mjs";

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, userEmailExist } = req.body;

    if (userEmailExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });
    req.body._id = user._id;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { registerUser };
