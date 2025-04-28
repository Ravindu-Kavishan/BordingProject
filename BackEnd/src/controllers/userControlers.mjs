import User from "../models/userModel.mjs"

const registerUser = async (req, res) => {
  try {
    const { name, email, password, userEmailExist } = req.body;

    if (userEmailExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { registerUser };
