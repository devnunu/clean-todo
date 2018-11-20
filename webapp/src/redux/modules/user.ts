import { ActionType } from '../../model/Common';
import UserState from '../../model/User';
import { SecureStore } from 'expo';

// action

const SAVE_TOKEN = 'SAVE_TOKEN';

// action creater

const saveToken = (token: string) => {
  return {
    type: SAVE_TOKEN,
    token
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

// export

export const actionCreators = {
  createAccount,
  usernameLogin,
  setLoginStatus
};

export default reducer;
