import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {courseService }from "./courseService";
import { toast } from "react-toastify";

export const getCourses = createAsyncThunk(
  "course/get-courses",
  async (thunkAPI) => {
    try {
      return await courseService.getCourses();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const getACourse = createAsyncThunk(
  "course/get",
  async (id,thunkAPI) => {
    try {
      return await courseService.getSingleCourse(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const addToWishlist = createAsyncThunk(
  "product/wishlist",
  async (productId, thunkAPI) => {
    try {
      return await courseService.addToWishlist(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const addRating = createAsyncThunk(
  "course/rating",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      return await courseService.rateCourse(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const courseState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const courseSlice = createSlice({
  name: "courses",
  initialState: courseState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.courses = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      }).addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = "Product Added To Wishlist";
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      }).addCase(getACourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getACourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleCourse = action.payload;
      })
      .addCase(getACourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      }).addCase(addRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.rating = action.payload;
        state.message= "Rating added successfully"
        if(state.isSuccess){
          toast.info("Rating added successfully")
        }
      })
      .addCase(addRating.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
    
  },
});
export default courseSlice.reducer;