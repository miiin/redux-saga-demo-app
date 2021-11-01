// Saga
import { takeEvery, all, fork } from "redux-saga/effects";
import * as CounterSaga from "./counter";
import * as CounterActions from "../redux/counter";

export default function* rootSaga() {
  // Root Saga
  yield all([fork(handleCounter)]);
}

function* handleCounter() {
  yield takeEvery(
    CounterActions.plusAfterOneSeconds,
    CounterSaga.plusAfterOneSeconds
  );
  yield takeEvery(CounterActions.plusRandom, CounterSaga.plusRandom);
}
