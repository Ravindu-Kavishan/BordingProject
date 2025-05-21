import axios from "axios";
import { BACKEND_URL } from "../utils/backendURL";

const getAllPlaces = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/users/getAllPlaces`);
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

const getPlaceDetails = async (bordingId) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/users/getPlaseDetails`,
      bordingId
    );
    console.log(response);
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

const getMyPlaces = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/owners/getMyPlaces`, {
      withCredentials: true,
    });
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

export default { getAllPlaces, getPlaceDetails, getMyPlaces };
