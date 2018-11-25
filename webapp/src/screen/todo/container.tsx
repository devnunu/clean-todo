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
}

interface ContainerState {
  isLoading: boolean;
  todoTitle: string;
  isModalOpen: boolean;
}

class Container extends Component<ContainerProps, ContainerState> {
  state = {
    ...this.state,
    isLoading: true,
    isModalOpen: false
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
          onPressConfirm={this._onPressModalConfirm}
        />
      </View>
    );
  }

  componentDidMount() {
    this.props.getTodoList();
  }

  // componentDidUpdate() {
  //   this.props.getTodoList();
  // }

  componentWillReceiveProps = (nextProps: ContainerProps) => {
    if (nextProps.todoList) this.setState({ ...this.state, isLoading: false });
  };

  private _onChangeTodoTitle = (todoTitle: string): void =>
    this.setState({ ...this.state, todoTitle });

  private _handleCreateTodo = (): void => {
    this.props.createTodo(this.state.todoTitle);
    this.setState({ ...this.state, todoTitle: undefined });
  };

  private _onPressModalCancel = () => {
    this.setState({ ...this.state, isModalOpen: false });
  };

  private _onPressModalConfirm = () => {
    this.setState({ ...this.state, isModalOpen: false });
  };

  private _onLongPressItem = () => {
    this.setState({ ...this.state, isModalOpen: true });
  };
}

export default Container;
