import UserState from '../../model/user';

// action

const USER_LOGIN = 'USER_LOGIN';
const USER_SIGNUP = 'USER_SIGNUP';

// action creater

function userLogin() {
  return {
    type: USER_LOGIN
  };
}

function userSignup() {
  return {
    type: USER_SIGNUP
  };
}

// reducer

const initialState: UserState = {
  userId: ''
};

function reducer(state = initialState, action: string) {
  switch (action) {
    case USER_LOGIN:
      return applyUserLogin(state, action);
    case USER_SIGNUP:
      return applyUserSignup(state, action);
    default:
      return state;
  }
}

// reducer function

function applyUserLogin(state: UserState, action: string) {
  return {
    ...state
  };
}

function applyUserSignup(state: UserState, action: string) {
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
