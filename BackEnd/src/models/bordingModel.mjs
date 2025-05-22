import mongoose from "mongoose";

const BordingSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  availability: {
    type: Number,
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
  Location_Link: {
    type: String,
    required: true,
  },
  doubleBeds: {
    type: Number,
    required: true,
  },
  singleBeds: {
    type: Number,
    required: true,
  },
  chairs: {
    type: Number,
    required: true,
  },
  tables: {
    type: Number,
    required: true,
  },
  clothRacks: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  showers: {
    type: Number,
    required: true,
  },
  toilets: {
    type: Number,
    required: true,
  },
  commodes: {
    type: Number,
    required: true,
  },
  bathrooms_are_dedicated_for: {
    type: Number,
    required: true,
  },
  descreption_about_bathrooms: {
    type: String,
    required: false,
  },
  light_bill: {
    type: String,
    required: true,
  },
  water_bill: {
    type: String,
    required: true,
  },
  special_features: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: [String],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Bording = mongoose.model("Bording", BordingSchema);

export default Bording;
