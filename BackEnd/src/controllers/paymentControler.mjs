// controllers/paymentControler.mjs
import axios from "axios";

const payHere = async (req, res) => {
  console.log(req.body);
  const { paymentAmount, customerEmail, customerName, orderId } = req.body;

  if (!paymentAmount || !customerEmail || !customerName || !orderId) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  const data = {
    merchant_id: process.env.PAYHERE_MERCHANT_ID || "YOUR_MERCHANT_ID",
    return_url: "https://yourapp.com/payment-success",
    cancel_url: "https://yourapp.com/payment-cancel",
    notify_url: "https://yourbackend.com/payhere/notify",
    order_id: orderId,
    items: "Boarding Fee",
    amount: paymentAmount,
    currency: "LKR",
    first_name: customerName,
    last_name: "",
    email: customerEmail,
    phone: "0700000000",
    address: "University of Moratuwa",
    city: "Moratuwa",
    country: "Sri Lanka",
  };

  try {
    // Normally PayHere expects this to be a form post from frontend
    // Here we send back the info to the frontend to build the form
    return res.json({
      success: true,
      message: "Redirect to PayHere",
      payHereData: data,
      payHereUrl: "https://sandbox.payhere.lk/pay/checkout",
    });
  } catch (err) {
    console.error("Payment init error:", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Payment initiation failed" });
  }
};

export default {
  payHere,
};
