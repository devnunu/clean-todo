import React, { Component } from 'react';
import Main, { LoadingView } from './presenter';

interface ContainerProps {
  isLoggedIn: boolean;
  setLoginStatus: () => void;
}

interface ContainerState {
  isLoading: boolean;
}

class Container extends Component<ContainerProps, ContainerState> {
  state = {
    ...this.state,
    isLoading: true
  };
  render() {
    console.log('this.props.isLoggedIn', this.props.isLoggedIn);
    return this.state.isLoading ? <LoadingView /> : <Main {...this.props} />;
  }

  componentDidMount() {
    this.props.setLoginStatus();
  }

  componentWillReceiveProps = nextProps => {
    console.log('isLoggedIn 123', nextProps.isLoggedIn);
    if (nextProps.isLoggedIn) {
      this.setState({
        isLoading: false
      });
    }
  };
}

export default Container;
