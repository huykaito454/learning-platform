import { createSlice } from "@reduxjs/toolkit";
const questionListSlice = createSlice({
  name: "questionList",
  initialState: {
    questionList: null,
    error: "",
  },
  reducers: {
    setQuestionList: (state, action) => ({
      ...state,
      questionList: action.payload,
    }),
    getQuestionList() {},
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});
export const { setQuestionList, getQuestionList, setError } =
  questionListSlice.actions;
export default questionListSlice.reducer;
