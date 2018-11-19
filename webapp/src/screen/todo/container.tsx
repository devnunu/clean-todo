import React, { Component } from 'react';
import { View, Text } from 'react-native';

// model
import Todo from '../../model/Todo';

// view
import TodoView from './presenter';

interface ContainerProps {
  todoList: Todo[];
  getTodoList: () => void;
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
      <View>
        <Text>Loading...</Text>
      </View>
    ) : (
      <TodoView />
    );
  }

  componentDidMount() {
    this.props.getTodoList();
  }

  componentWillReceiveProps = (nextProps: ContainerProps) => {
    if (nextProps.todoList) this.setState({ ...this.state, isLoading: false });
  };
}

export default Container;
