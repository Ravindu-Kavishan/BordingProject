import Bording from "../models/bordingModel.mjs";

const getPlaceDetails = async (req, res, next) => {
  try {
    const bordingId = req.body.bordingId;
    req.body.place = await Bording.findById({ _id: bordingId },{__v:0});
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getPlaceDetails };

