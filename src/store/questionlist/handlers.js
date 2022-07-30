import { call, put } from "redux-saga/effects";
import { setError, setQuestionList } from "./questionListSlice";
import getQuestionList from "./services";
export default function* handleGetQuestionList() {
  try {
    const res = yield call(getQuestionList);
    console.log(res.data);
    yield put(setQuestionList(res.data));
  } catch (error) {
    yield put(setError(error));
    console.log(error);
  }
}
