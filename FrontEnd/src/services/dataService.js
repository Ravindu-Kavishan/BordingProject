import axios from "axios";
import { BACKEND_URL } from "../utils/backendURL"; 

const getAllPlaces = async (formData) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/users/getAllPlaces`
    );
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        "Geting Details failed.",
    };
  }
};

const getPlace = async (bordingId) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/getPlaseDetails`,
      bordingId
    );
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        "Geting Details failed.",
    };
  }
};

export default { getAllPlaces,getPlace };
