import React, { Component } from 'react';

// model
import Todo from '../../model/Todo';

// view
import TimelineView from './presenter';
import LoadingView from '../../component/loading';

interface ContainerProps {
  todoTimeline: Todo[];
  getTodoTimeline: () => void;
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
    return this.state.isLoading ? (
      <LoadingView />
    ) : (
      <TimelineView
        todoList={this.convertTodoListToDateObject(this.props.todoTimeline)}
      />
    );
  }

  componentDidMount() {
    if (!this.props.todoTimeline) this.props.getTodoTimeline();
  }

  componentWillReceiveProps = (nextProps: ContainerProps) => {
    if (nextProps.todoTimeline)
      this.setState({ ...this.state, isLoading: false });
  };

  convertTodoListToDateObject(todoList: Todo[]) {
    return todoList.reduce(function(a, e) {
      let estKey = e['createdAt'].split(' ')[0];
      (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
      return a;
    }, {});
  }
}

export default Container;
