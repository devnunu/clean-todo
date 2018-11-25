import React, { Component } from 'react';

// view
import Main from './presenter';
import LoadingView from '../component/loading';

interface ContainerProps {
  isLoggedIn: boolean;
  setLoginStatus: () => void;
  getTodoTimeline: () => void;
  getTodoList: () => void;
}

interface ContainerState {
  isLoading: boolean;
}

class Container extends Component<ContainerProps, ContainerState> {
  INDEX_OF_TODO = 0;
  INDEX_OF_TIMELINE = 1;

  state = {
    ...this.state,
    isLoading: true
  };
  render() {
    return this.state.isLoading ? (
      <LoadingView />
    ) : (
      <Main {...this.props} onChangeTab={this._onChangeTab} />
    );
  }

  componentDidMount() {
    this.props.setLoginStatus();
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.isLoggedIn !== undefined) {
      this.setState({
        isLoading: false
      });
    }
  };

  private _onChangeTab = tabIndex => {
    if (tabIndex === this.INDEX_OF_TODO) this.props.getTodoList();
    else if (tabIndex === this.INDEX_OF_TIMELINE) this.props.getTodoTimeline();
  };
}

export default Container;
