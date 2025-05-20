import mongoose from "mongoose";

const BordingSchema = new mongoose.Schema(
  {  
    type: {
      type: String,
      required: true,
    },
    availablity: {
      type: Number, 
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
    gate: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    price: {
      type: Number, 
      required: true,
    },
    lat: {
      type: Number, 
      required: true,
    },
    lng: {
      type: Number, 
      required: true,
    },
    locationName: {
      type: String,
      required: true,
    },
    distance: {
      type: Number, 
      required: true,
    },
    duration: {
      type: Number, 
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
  }
);

const Bording = mongoose.model("Bording", BordingSchema);

export default Bording;
