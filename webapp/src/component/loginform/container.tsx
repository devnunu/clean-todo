import React, { Component } from 'react';
import { View } from 'react-native';

// presenter
import LoginForm from './presenter';

interface ContainerProps {}

class Container extends Component<ContainerProps, {}> {
  render() {
    return <LoginForm />;
  }
}

export default Container;
