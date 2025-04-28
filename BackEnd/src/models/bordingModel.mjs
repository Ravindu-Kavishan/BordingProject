import mongoose from "mongoose";

const BordingSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    availablity: {
      type: Int,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    forWhome: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    }
  }
);

const Bording = mongoose.model("Bording", BordingSchema);

export default Bording;
