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

const getUserDetails = async (req, res, next) => {
  try {
    const userId = req.body.place.userId;
    req.body.user = await User.findById({ _id: userId },{password:0,__v:0});
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {getUserByEmail,getUserDetails};
