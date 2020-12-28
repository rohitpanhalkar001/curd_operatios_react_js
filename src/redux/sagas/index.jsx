import Constants from "./../../utils/constants";
import { takeLatest } from "redux-saga/effects";
import GetAllUserListApi from "./GetAllUserListApi";

function* rootSaga() {
  yield takeLatest(Constants.ALL_SAGA.GET_ALL_USER_SAGA, GetAllUserListApi);
}

export default rootSaga;
