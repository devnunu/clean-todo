import { ActionType } from '../../model/Common';
import UserState from '../../model/User';
import { string } from 'prop-types';
import { SecureStore } from 'expo';

// action

const USER_LOGIN = 'USER_LOGIN';
const USER_SIGNUP = 'USER_SIGNUP';
const SAVE_TOKEN = 'SAVE_TOKEN';

// action creater

const saveToken = (token: string) => {
  return {
    type: SAVE_TOKEN,
    token
  };
};

const userLogin = (): ActionType => {
  return {
    type: USER_LOGIN
  };
};

const userSignup = (): ActionType => {
  return {
    type: USER_SIGNUP
  };
};

// api action

const usernameLogin = (username: string, password: string) => {
  return (dispatch: any) => {
    fetch('http://localhost:3000/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: username,
        password
      })
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
};

function createAccount(username, password, passwordValid) {
  return async dispatch => {
    fetch('http://localhost:3000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: username,
        password,
        passwordValid
      })
    })
      .then(response => response.json())
      .then(json => console.log(json)) // TODO: 배포시 삭제
      .catch(err => console.log(err));
  };
}

function setLoginStatus() {
  return async (dispatch, getState) => {
    const token = await SecureStore.getItemAsync('token');
    dispatch(saveToken(token));
  };
}

const initialState = {
  isLoggedIn: false,
  token: undefined
};

// reducer
const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case USER_LOGIN:
      return applyUserLogin(state, action);
    case USER_SIGNUP:
      return applyUserSignup(state, action);
    case SAVE_TOKEN:
      return applySetToken(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetToken = (state: UserState, action: ActionType) => {
  const { token } = action;
  SecureStore.setItemAsync('token', token);
  return {
    isLoggedIn: true,
    token
  };
};

const applyUserLogin = (state: UserState, action: ActionType) => {
  return {
    ...state
  };
};

const applyUserSignup = (state: UserState, action: ActionType) => {
  return {
    ...state
  };
};

// export

export const actionCreators = {
  userLogin,
  userSignup,
  createAccount,
  usernameLogin,
  setLoginStatus
};

export default reducer;
