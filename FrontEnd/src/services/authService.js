import axios from "axios";
import { BACKEND_URL } from "../utils/backendURL"; // ✅ also fix this import if not already

const registerUser = async (formData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/owners/register`, // ✅ fixed line
      formData,
      {
        withCredentials: true,
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        "Registration failed.",
    };
  }
};

export default { registerUser };
