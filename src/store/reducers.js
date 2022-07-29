import userSlice from "./user/userSlice";
import userGoogleSlice from "./userGoggle/userGoogleSlice";

const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
  user: userSlice,
  userGoogle: userGoogleSlice,
});
