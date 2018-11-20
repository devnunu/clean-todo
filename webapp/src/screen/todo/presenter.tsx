import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

// model
import Todo from '../../model/Todo';

interface TodoProps {
  todoTitle: string;
  todoList: Todo[];
  onChangeTodoTitle: (todoTitle) => void;
  onPressCreateTodo: () => void;
}

const TodoView = (props: TodoProps) => {
  return (
    <View>
      <Text>Todo</Text>
      <View>
        <TextInput
          value={props.todoTitle}
          onChangeText={props.onChangeTodoTitle}
        />
        <Button title=">" onPress={props.onPressCreateTodo} />
      </View>
      <View>
        {props.todoList.map((item, index) => TodoItemView(item, index))}
      </View>
    </View>
  );
};

const TodoItemView = (todoItem: Todo, index: number) => {
  return (
    <View key={index}>
      <Text>{todoItem.title}</Text>
    </View>
  );
};

export default TodoView;
