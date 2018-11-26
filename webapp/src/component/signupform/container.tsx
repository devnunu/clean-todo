import React, { Component } from 'react';
import { View } from 'react-native';

// presenter
import SignupForm from './presenter';

interface ContainerProps {
  onClickSignupButton: (action: string) => void;
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
        {...this.state}
        onChangeUsername={this._onChangeUsername}
        onChangePassword={this._onChangePassword}
        onChangePasswordValid={this._onChangePasswordValid}
        onClickSignupButton={this._onClickSignupButton}
      />
    );
  }

  private _onClickSignupButton = async (username, password, validPassword) => {
    this.props.createAccount(username, password, validPassword);
    this.props.onClickSignupButton('login');
  };

  private _onChangeUsername = (username: string): void =>
    this.setState({ ...this.state, username });

  private _onChangePassword = (password: string): void =>
    this.setState({ ...this.state, password });

  private _onChangePasswordValid = (passwordValid: string): void =>
    this.setState({ ...this.state, passwordValid });
}

export default Container;
