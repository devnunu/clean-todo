import React, { Component } from 'react';
import { View, Text } from 'react-native';

// model
import Todo from '../../model/Todo';

// view
import TodoView from './presenter';
import LoadingView from '../../component/loading';

interface ContainerProps {
  todoList: Todo[];
  getTodoList: () => void;
  createTodo: (todoTitle: string) => void;
  updateTodoComplte: (id: number) => void;
}

interface ContainerState {
  isLoading: boolean;
  todoTitle: string;
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
      <TodoView
        todoTitle={this.state.todoTitle}
        todoList={this.props.todoList}
        onChangeTodoTitle={this._onChangeTodoTitle}
        onPressCreateTodo={this._handleCreateTodo}
        onPressTodoCheckBox={this.props.updateTodoComplte}
      />
    );
  }

  componentDidMount() {
    this.props.getTodoList();
  }

  componentDidUpdate() {
    this.props.getTodoList();
  }

  componentWillReceiveProps = (nextProps: ContainerProps) => {
    if (nextProps.todoList) this.setState({ ...this.state, isLoading: false });
  };

  private _onChangeTodoTitle = (todoTitle: string): void =>
    this.setState({ ...this.state, todoTitle });

  private _handleCreateTodo = (): void => {
    this.props.createTodo(this.state.todoTitle);
    this.setState({ ...this.state, todoTitle: undefined });
  };
}

export default Container;
