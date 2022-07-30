import { all, fork } from "redux-saga/effects";
import questionListSaga from "./questionlist/saga";
import userSaga from "./user/saga";
export default function* rootSaga() {
  yield all([fork(userSaga), fork(questionListSaga)]);
}
