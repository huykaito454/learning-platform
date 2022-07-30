import modalSlice from "./modal/modalSlice";
import questionSlice from "./question/questionSlice";
import questionListSlice from "./questionlist/questionListSlice";
import userSlice from "./user/userSlice";
import userGoogleSlice from "./userGoggle/userGoogleSlice";
const { combineReducers } = require("@reduxjs/toolkit");
export const reducer = combineReducers({
  user: userSlice,
  userGoogle: userGoogleSlice,
  modal: modalSlice,
  question: questionSlice,
  questionList: questionListSlice,
});
