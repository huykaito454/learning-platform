import { takeLatest } from "redux-saga/effects";
import handleGetQuestionList from "./handlers";
import { getQuestionList } from "./questionListSlice";
export default function* questionListSaga() {
  yield takeLatest(getQuestionList.type, handleGetQuestionList);
}
