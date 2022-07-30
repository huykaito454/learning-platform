import { createSlice } from "@reduxjs/toolkit";
const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsOpen: (state, action) => ({
      ...state,
      isOpen: action.payload,
    }),
  },
});
export const { setIsOpen } = modalSlice.actions;
export default modalSlice.reducer;
