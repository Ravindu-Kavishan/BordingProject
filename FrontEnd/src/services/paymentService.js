import axios from "axios";
import { BACKEND_URL } from "../utils/backendURL";

const payWithBackend = async ({
  paymentAmount,
  customerEmail,
  customerName,
  orderId,
}) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/owners/pay`,
      { paymentAmount, customerEmail, customerName, orderId },
      {
        withCredentials: true,
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message || error.message || "payment failed.",
    };
  }
};

export default { payWithBackend };
