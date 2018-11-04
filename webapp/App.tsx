import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/configureStore';

import Intro from './src/screen/intro';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Intro />
      </Provider>
    );
  }
}
