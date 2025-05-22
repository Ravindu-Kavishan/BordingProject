// import axios from "axios";
// import { BACKEND_URL } from "../utils/backendURL";

// const uplordThumbnail = async (formData) => {
//   try {
//     const response = await axios.post(
//       `${BACKEND_URL}/uploadImgs/thumbnail`,
//       formData
//     );
//     return { success: true, imageUrl: response.data.imageUrl };
//   } catch (error) {
//     return {
//       success: false,
//       message:
//         error.response?.data?.message ||
//         error.message ||
//         "Getting thumbnail upload failed.",
//     };
//   }
// };

// const uplordImages = async (formData) => {
//   try {
//     const response = await axios.post(
//       `${BACKEND_URL}/uploadImgs/images`,
//       formData
//     );
//     return { success: true, imageUrls: response.data.imageUrls };
//   } catch (error) {
//     return {
//       success: false,
//       message:
//         error.response?.data?.message ||
//         error.message ||
//         "Multiple image upload failed.",
//     };
//   }
// };

// export default { uplordThumbnail, uplordImages };


import axios from "axios";
import { BACKEND_URL } from "../utils/backendURL";

const uploadThumbnail = async (formData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/uploadImgs/thumbnail`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return { success: true, imageUrl: response.data.imageUrl };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const uploadImages = async (formData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/uploadImgs/images`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return { success: true, imageUrls: response.data.imageUrls };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export default {
  uploadThumbnail,
  uploadImages,
};
