import axios from "axios";

export const predictStock = async (data) => {
  try {
    const response = await axios.post(
      "https://stock-market-project-3.onrender.com/predict",
      data
    );

    return response.data;
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    throw error;
  }
};