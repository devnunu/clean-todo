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

const login = (username: string, password: string) => {
  return (dispatch: any) => {
    fetch('/user/login/', {
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

// reducer

const reducer = async (state, action: ActionType) => {
  if (state === undefined) {
    state = {
      isLoggedIn: (await SecureStore.getItemAsync('token')) ? true : false,
      token: await SecureStore.getItemAsync('token')
    };
  }
  switch (action.type) {
    case USER_LOGIN:
      return applyUserLogin(state, action);
    case USER_SIGNUP:
      return applyUserSignup(state, action);
    default:
      return state;
  }
};

// reducer function
const applySetToken = async (state: UserState, action: ActionType) => {
  const { token } = action;
  await SecureStore.setItemAsync('token', token);
  return {
    ...state,
    isLoggedIn: true,
    token: token
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
  userSignup
};

export default reducer;
