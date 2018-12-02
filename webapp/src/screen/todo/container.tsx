import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';

// model
import Todo from '../../model/Todo';

// view
import TodoView from './presenter';
import LoadingView from '../../component/loading';
import DeleteModal from '../../component/deleteModal';

interface ContainerProps {
  todoList: Todo[];
  getTodoList: () => void;
  createTodo: (todoTitle: string) => void;
  updateTodoComplte: (id: number) => void;
  deleteTodo: (todoId: number) => void;
}

interface ContainerState {
  isLoading: boolean;
  todoTitle: string;
  isModalOpen: boolean;
  selItemId: number;
}

class Container extends Component<ContainerProps, ContainerState> {
  state = {
    ...this.state,
    isLoading: true,
    isModalOpen: false,
  };
  render() {
    return this.state.isLoading ? (
      <LoadingView />
    ) : (
      <View>
        <TodoView
          todoTitle={this.state.todoTitle}
          todoList={this.props.todoList}
          onChangeTodoTitle={this._onChangeTodoTitle}
          onPressCreateTodo={this._handleCreateTodo}
          onPressTodoCheckBox={this.props.updateTodoComplte}
          onLongPressItem={this._onLongPressItem}
        />
        <DeleteModal
          isModalOpen={this.state.isModalOpen}
          onPressCancel={this._onPressModalCancel}
          onPressDelete={this._onPressModalDelete}
        />
      </View>
    );
  }

  componentDidMount() {
    if (!this.props.todoList) this.props.getTodoList();
  }

  componentWillReceiveProps(nextProps: ContainerProps) {
    if (nextProps.todoList) this.setState({ ...this.state, isLoading: false });
  }

  private _onChangeTodoTitle = (todoTitle: string): void => this.setState({ ...this.state, todoTitle });

  private _handleCreateTodo = (): void => {
    this.props.createTodo(this.state.todoTitle);
    this.setState({ ...this.state, todoTitle: undefined });
  };

  private _onPressModalCancel = () => {
    this.setState({ ...this.state, isModalOpen: false });
  };

  private _onPressModalDelete = () => {
    this.props.deleteTodo(this.state.selItemId);
    this.setState({ ...this.state, isModalOpen: false });
  };

  private _onLongPressItem = (todoId: number) => {
    this.setState({ ...this.state, isModalOpen: true, selItemId: todoId });
  };
}

export default Container;
