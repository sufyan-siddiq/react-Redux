import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/counter";



export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
