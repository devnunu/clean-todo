import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// model
import Todo from '../../model/Todo';

interface TodoProps {
  todoTitle: string;
  todoList: Todo[];
  onChangeTodoTitle: (todoTitle) => void;
  onPressCreateTodo: () => void;
  onPressTodoCheckBox: (id: number) => void;
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
        {props.todoList.map((item, index) => TodoItemView(props, item, index))}
      </View>
    </View>
  );
};

const TodoItemView = (props: TodoProps, todoItem: Todo, index: number) => {
  return (
    <View key={index} style={styles.todoItemView}>
      <View
        style={
          todoItem.completed
            ? styles.todoItemCheckBoxComplete
            : styles.todoItemCheckBox
        }
      >
        <Text onPress={() => props.onPressTodoCheckBox(todoItem.id)}>
          {'체크'}
        </Text>
      </View>
      <View>
        <Text>{todoItem.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItemView: {
    display: 'flex',
    flexDirection: 'row'
  },
  todoItemCheckBox: {
    backgroundColor: 'black'
  },
  todoItemCheckBoxComplete: {
    backgroundColor: 'green'
  }
});

export default TodoView;
