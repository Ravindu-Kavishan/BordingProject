import User from "../models/userModel.mjs";

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, userEmailExist } = req.body;

    if (userEmailExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });
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

export default { registerUser, loginUser, sendUserDetails, updateOwner };
