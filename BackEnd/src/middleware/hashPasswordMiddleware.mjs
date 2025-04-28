import bcrypt from "bcrypt";

const createHashPassword = async (req, res, next) => {
  try {
    const { password} = req.body;
    const salt = await bcrypt.genSalt(10); // Generate a salt
    req.body.password = await bcrypt.hash(password, salt); // Hash the password
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { createHashPassword };
