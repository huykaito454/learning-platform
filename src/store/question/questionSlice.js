import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    question: null,
  },
  reducers: {
    setQuestion: (state, action) => ({
      ...state,
      question: action.payload,
    }),
  },
});

export const { setQuestion } = questionSlice.actions;

export default questionSlice.reducer;
