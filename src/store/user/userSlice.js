import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: "",
  },
  reducers: {
    setUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    getUser() {},
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});
export const { setUser, getUser, setError } = userSlice.actions;
export default userSlice.reducer;
