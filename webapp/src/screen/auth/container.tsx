import React, { Component } from 'react';

// model
import {Mode} from '../../model/Common'

// presenter
import User from './presenter';

interface ContainerProps {
  usernameLogin: (username: string, password: string) => void;
  createAccount: (
    username: string,
    password: string,
    validPassword: string
  ) => void;
}

interface ConatinerState {
  action: Mode;
}

class Container extends Component<ContainerProps, ConatinerState> {
  constructor(props) {
    super(props);
    this.state = {
      action: Mode.LOGIN
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

  private _changeAction = (action: Mode) =>
    this.setState({ ...this.state, action });
}

export default Container;
