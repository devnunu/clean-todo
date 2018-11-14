import React, { Component } from 'react';
import { View } from 'react-native';

// presenter
import SignupForm from './presenter';

interface ContainerProps {
  createAccount: (username, password, validPassword) => void;
}

interface ContainerState {
  username: string;
  password: string;
  passwordValid: string;
}

class Container extends Component<ContainerProps, ContainerState> {
  render() {
    return (
      <SignupForm
        {...this.props}
        {...this.state}
        onChangeUsername={this._onChangeUsername}
        onChangePassword={this._onChangePassword}
        onChangePasswordValid={this._onChangePasswordValid}
      />
    );
  }

  private _onChangeUsername = (username: string): void =>
    this.setState({ ...this.state, username });

  private _onChangePassword = (password: string): void =>
    this.setState({ ...this.state, password });

  private _onChangePasswordValid = (passwordValid: string): void =>
    this.setState({ ...this.state, passwordValid });
}

export default Container;
