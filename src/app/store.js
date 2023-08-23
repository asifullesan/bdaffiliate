import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import courseReducer from "../features/course/courseSlice";
import blogReducer from "../features/blogs/blogSlice";
import contactReducer from "../features/contact/contactSlice";


export const store = configureStore({
  reducer: {
    auth:authReducer,
    course: courseReducer,
    blog: blogReducer,
    contact: contactReducer,
  },
});