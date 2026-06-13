import axios from "axios";

export const predictStock = async (data) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/predict",
      data
    );

    return response.data;
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    throw error;
  }
};