import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL="https://66b1f8e71ca8ad33d4f5f63e.mockapi.io"

export const fetchCampers = createAsyncThunk("campers/fetchAll", async ({ vehicleType = "", filters = {}, location = "" }, thunkAPI) => {
  try {
    const query = new URLSearchParams();
    if (vehicleType) query.append("form", vehicleType.toLowerCase());
    if (location) query.append("location", location);
    for (const [key, value] of Object.entries(filters)) {
  if (value) {
    query.append(key, value);
  }
}
    
    console.log("Query:", query.toString());
    const response = await axios.get(`/campers?${query.toString()}`);

    if (response.data.items.length === 0) {
        throw new Error("No campers found");
    }
    
    return response.data.items;
  } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkAPI.rejectWithValue("No campers found for this location.");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
});



export const fetchCamperById = createAsyncThunk("campers/fetchById", async (camperId, thunkAPI) => {
  try {
    const response = await axios.get(`/campers/${camperId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});