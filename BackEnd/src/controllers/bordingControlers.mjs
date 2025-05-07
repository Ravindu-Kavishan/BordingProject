import Bording from "../models/bordingModel.mjs";

const addPlace = async (req, res, next) => {
  try {
    const placeData = req.body;
    const userId = req.user.id;

    const newBording = await Bording.create({
      ...placeData,
      userId,
    });

    res
      .status(201)
      .json({ message: "Place added successfully", data: newBording });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMyPlaces = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const myBordings = await Bording.find({ userId }, { name: 1, _id: 1 });

    res.status(200).json(myBordings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { addPlace, getMyPlaces };
