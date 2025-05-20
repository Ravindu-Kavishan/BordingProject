import axios from "axios";
import { BACKEND_URL } from "../utils/backendURL"; 

const registerUser = async (formData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/owners/register`, 
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

const loginUser = async (formData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/owners/login`, 
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
        "Login failed.",
    };
  }
};

export default { registerUser,loginUser };
