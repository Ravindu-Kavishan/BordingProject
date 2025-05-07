import mongoose from "mongoose";

const BordingSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    availablity: {
      type: Number, // Changed from Int to Number
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
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // assuming you have a User model
      required: true,
    },
  }
);

const Bording = mongoose.model("Bording", BordingSchema);

export default Bording;
