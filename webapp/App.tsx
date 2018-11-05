import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/configureStore';

import Main from './src/screen/main';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
