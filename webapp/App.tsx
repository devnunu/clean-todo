import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/configureStore';
import { SecureStore } from 'expo';

import Route from './src/route';

// TODO: 테스트용 이므로 지워야함
interface AppState {
  isClear: boolean;
}

export default class App extends Component<{}, AppState> {
  state = {
    isClear: false
  };

  async componentDidMount() {
    await SecureStore.deleteItemAsync('token');
    this.setState({ isClear: true });
  }
  render() {
    return (
      this.state.isClear && (
        <Provider store={store}>
          <Route />
        </Provider>
      )
    );
  }
}
