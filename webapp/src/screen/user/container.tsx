import React, { Component } from 'react';
import { View } from 'react-native';

// presenter
import User from './presenter';

interface UserProps {
  token: string;
}

class Container extends Component<UserProps, {}> {
  render() {
    return <User {...this.props} />;
  }
}

export default Container;
