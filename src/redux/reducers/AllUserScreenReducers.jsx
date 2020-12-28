import Constants from "./../../utils/constants";

const initialState = {
  isLoading: false,
  // screen variables
  userList: [],
  isUserEdit: false
};

const AllUserScreenReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case Constants.COMMON.TOGGLE_LOADING_STATE:
      return Object.assign({}, state, { isLoading: payload.value });

    case Constants.USER.ALL_USER_LIST:
      return Object.assign({}, state, { userList: payload.value });

    case Constants.USER.UPDATE_EDIT_USER_STATUS:
      return Object.assign({}, state, { isUserEdit: payload.value });

    default:
      return state;
  }
};

export default AllUserScreenReducers;
