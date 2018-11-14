import React, { Component } from 'react';
import { View } from 'react-native';

// presenter
import LoginForm from './presenter';

interface ContainerProps {
  usernameLogin: (username: string, password: string) => void;
}

interface ContainerState {
  username: string;
  password: string;
}

class Container extends Component<ContainerProps, ContainerState> {
  render() {
    return (
      <LoginForm
        {...this.props}
        {...this.state}
        onChangeUsername={this._onChangeUsername}
        onChangePassword={this._onChangePassword}
      />
    );
  }

  private _onChangeUsername = (username: string): void =>
    this.setState({ ...this.state, username });

  private _onChangePassword = (password: string): void =>
    this.setState({ ...this.state, password });
}

export default Container;
