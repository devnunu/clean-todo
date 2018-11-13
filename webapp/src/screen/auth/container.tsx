import React, { Component } from 'react';
import { View } from 'react-native';

// presenter
import User from './presenter';

interface ContainerProps {
  token: string;
}

interface ConatinerState {
  action: string;
}

class Container extends Component<ContainerProps, ConatinerState> {
  constructor(props) {
    super(props);
    this.state = {
      action: 'login'
    };
  }
  render() {
    return (
      <User
        {...this.props}
        action={this.state.action}
        changeAction={this._changeAction.bind(this)}
      />
    );
  }

  private _changeAction = (action: string) =>
    this.setState({ ...this.state, action });
}

export default Container;
