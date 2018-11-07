import { ActionType } from '../../model/Common';
import UserState from '../../model/User';
import { string } from 'prop-types';

// action

const USER_LOGIN = 'USER_LOGIN';
const USER_SIGNUP = 'USER_SIGNUP';

// action creater

function userLogin(): ActionType {
  return {
    type: USER_LOGIN
  };
}

function userSignup(): ActionType {
  return {
    type: USER_SIGNUP
  };
}

// reducer

const initialState: UserState = {
  isLoggedIn: false,
  token: ''
};

function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case USER_LOGIN:
      return applyUserLogin(state, action);
    case USER_SIGNUP:
      return applyUserSignup(state, action);
    default:
      return state;
  }
}

// reducer function

function applyUserLogin(state: UserState, action: ActionType) {
  return {
    ...state
  };
}

function applyUserSignup(state: UserState, action: ActionType) {
  return {
    ...state
  };
}

// export

export const actionCreators = {
  userLogin,
  userSignup
};

export default reducer;
