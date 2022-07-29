import { takeLatest } from "redux-saga/effects";
import handleGetUser from "./handlers";
import { getUser } from "./userSlice";
export default function* userSaga() {
  yield takeLatest(getUser.type, handleGetUser);
}
