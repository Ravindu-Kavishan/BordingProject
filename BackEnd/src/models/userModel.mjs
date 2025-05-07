import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
      "Please provide a valid email address"
    ]
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

export default User;
