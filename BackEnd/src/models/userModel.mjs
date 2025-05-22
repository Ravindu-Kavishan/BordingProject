import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
      "Please provide a valid email address",
    ],
  },
  contactNumber: {
    type: String,
    required: true,
    match: [/^07\d{8}$/, "Contact number must start with '07' and be 10 digits long"],
  },
  whatsappNumber: {
    type: String,
    required: true,
    match: [/^07\d{8}$/, "WhatsApp number must start with '07' and be 10 digits long"],
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
