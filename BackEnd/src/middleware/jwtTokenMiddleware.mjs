import jwt from 'jsonwebtoken';

const generateJWTToken = async (req, res) => {
  try {
    const { user} = req.body;


    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true,         // Cannot access via JavaScript → protection against XSS attacks
      secure: process.env.NODE_ENV === 'production',  // Set true if in production (HTTPS only)
      maxAge: 60 * 60 * 1000  // 1 hour
    });

    // Also send user info (optional)
    res.status(201).json({
      _id: user._id,
      message: 'Success'
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {generateJWTToken};
