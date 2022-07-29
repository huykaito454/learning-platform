import { createSlice } from "@reduxjs/toolkit";
const userGoogleSlice = createSlice({
  name: "userGoogle",
  initialState: {
    user: [],
    error: "",
  },
  reducers: {
    setUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});
export const { setUser, setError } = userGoogleSlice.actions;
export default userGoogleSlice.reducer;
