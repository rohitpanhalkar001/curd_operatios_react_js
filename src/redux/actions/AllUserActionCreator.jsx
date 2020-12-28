import Constants from "../../utils/constants";

const callGetAllUserSaga = value => {
  return {
    type: Constants.ALL_SAGA.GET_ALL_USER_SAGA,
    payload: { value }
  };
};

const updateUserEditStatus = value => {
  return {
    type: Constants.USER.UPDATE_EDIT_USER_STATUS,
    payload: { value }
  };
};

export default { callGetAllUserSaga, updateUserEditStatus };
