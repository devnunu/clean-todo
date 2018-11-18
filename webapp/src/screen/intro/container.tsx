import React, { Component } from 'react';
import { View } from 'react-native';

// presenter
import Intro from './presenter';

interface IntroProps {
  testStatus: boolean;
  toggleTestStatus: () => void;
}

class Container extends Component<IntroProps, {}> {
  render() {
    return <Intro {...this.props} />;
  }
}

export default Container;
