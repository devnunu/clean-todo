import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/configureStore';

import Intro from './src/screen/intro';
import Main from './src/main';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
