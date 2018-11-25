import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/configureStore';

import Route from './src/route';

export default class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
