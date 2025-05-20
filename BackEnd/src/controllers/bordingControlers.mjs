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

const getPlace = async (req, res, next) => {
  try {
    const bordingId = req.body.bordingId;

    const bording = await Bording.findById({ _id: bordingId });

    res.status(200).json(bording);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePlace = async (req, res, next) => {
  try {
    const placeData = req.body;
    const userId = req.user.id;

    await Bording.updateOne(
      { _id: placeData.id, userId },
      { $set: { ...placeData, userId } },
      { runValidators: true }
    );
    res.status(200).json({ message: "Place updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getALLPlaces = async (req, res, next) => {
  try {
    const bording = await Bording.find(
      {},
      {
        type: 1,
        availablity: 1,
        for: 1,
        price: 1,
        distance: 1,
        thumbnail: 1,
      }
    );
    res.status(200).json(bording);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { addPlace, getPlace, getMyPlaces, updatePlace, getALLPlaces };
