import React, { Component } from 'react';

// view
import Main from './presenter';
import LoadingView from '../../component/loading'

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
    return this.state.isLoading ? <LoadingView /> : <Main {...this.props} />;
  }

  componentDidMount() {
    this.props.setLoginStatus();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.isLoggedIn) {
      this.setState({
        isLoading: false
      });
    }
  };
}

export default Container;
