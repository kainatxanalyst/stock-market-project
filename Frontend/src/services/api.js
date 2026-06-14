import axios from "axios";

// Use environment variable, fallback to your live Render backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://stock-prediction-api-zkls.onrender.com";

export const predictStock = async (data) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/predict`,
      data
    );

    return response.data;
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    throw error;
  }
};