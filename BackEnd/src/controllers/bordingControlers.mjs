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

    const myBordings = await Bording.find(
      { userId },
      {
        type: 1,
        availability: 1,
        forWhome: 1,
        price: 1,
        thumbnailUrl: 1,
        gate: 1,
        paid: 1,
      }
    );

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
      { paid: true },
      {
        type: 1,
        availability: 1,
        forWhome: 1,
        price: 1,
        thumbnailUrl: 1,
        gate: 1,
      }
    );
    res.status(200).json(bording);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePlace = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const userId = req.user.id;

    const result = await Bording.deleteOne({ _id, userId });

    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: "Place not found or unauthorized" });
    }

    res.status(200).json({ message: "Place Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  addPlace,
  getPlace,
  getMyPlaces,
  updatePlace,
  getALLPlaces,
  deletePlace,
};
