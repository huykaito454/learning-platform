import getUser from "./services";
import { call, put } from "redux-saga/effects";
import { setUser, setError } from "./userSlice";
export default function* handleGetUser() {
  try {
    const res = yield call(getUser);
    yield put(setUser(res.data));
  } catch (error) {
    yield put(setError(error));
    console.log(error);
  }
}
