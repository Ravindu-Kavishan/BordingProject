const conectPlaseWithOwner = async (req, res, next) => {
  try {
    const placeData = req.body.place;
    const ownerData = req.body.user;

    const data = { placeData,ownerData };
    res
      .status(201)
      .json({ message: "Place added successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { conectPlaseWithOwner };

