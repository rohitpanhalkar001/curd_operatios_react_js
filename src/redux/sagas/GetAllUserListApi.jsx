// get store from redux
import store from "./../../redux";

import { call, put } from "redux-saga/effects";

import Constants from "../../utils/constants";
import APICallingService from "./../../utils/services/APICAllingService";

const handleAllUserListFlow = async data => {
  let s = store.getState();

  let url = data.payload.value.getUsers;
  console.log("URL is " + url);
  let resp = await APICallingService.sendGetRequest(url);
  console.log("handleAllUserListFlow is " + JSON.stringify(resp));
  return resp;
};

function* GetAllUserListApi(data) {
  try {
    yield put({
      type: Constants.COMMON.TOGGLE_LOADING_STATE,
      payload: { value: true }
    });
    const response = yield call(handleAllUserListFlow, data);

    yield put({
      type: Constants.COMMON.TOGGLE_LOADING_STATE,
      payload: { value: false }
    });

    if (response.success) {
      console.log("response" + JSON.stringify(response));
      yield put({
        type: Constants.USER.ALL_USER_LIST,
        payload: { value: response.data.reverse() }
      });
    }
  } catch (e) {
    console.log("Error: ", e);
  }
}

export default GetAllUserListApi;
