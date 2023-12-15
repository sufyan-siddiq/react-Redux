import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../../../config/dummy";
const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    // add user
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    // update  user
    UpdateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
      });
    },
    // delete user
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload);
    },
  },
});
export const { addUser, deleteUser, UpdateUser } = userSlice.actions;
export default userSlice.reducer;
