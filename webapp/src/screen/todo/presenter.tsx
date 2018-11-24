import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

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
      <View style={styles.todoTextInputView}>
        <TextInput
          style={styles.todoTextInput}
          value={props.todoTitle}
          onChangeText={props.onChangeTodoTitle}
        />
        <TouchableOpacity
          style={styles.todoSubmitButton}
          onPress={props.onPressCreateTodo}
        >
          <Image
            style={{ flexShrink: 1 }}
            resizeMode={'cover'}
            source={require('../../common/assets/images/button_add.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.todoListView}>
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
  // textInput
  todoTextInputView: {
    display: 'flex',
    flexDirection: 'row'
  },
  todoTextInput: {
    flex: 7,
    borderColor: 'gray',
    borderBottomWidth: 0.3,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  todoSubmitButton: {
    display: 'flex',
    flex: 2,
    position: 'relative',
    backgroundColor: 'gray',
    alignItems: 'center'
  },
  // todoListView
  todoListView: {
    paddingVertical: 20,
    paddingHorizontal: 16
  },
  // todoItem
  todoItemView: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  todoItemCheckBox: {
    backgroundColor: 'black'
  },
  todoItemCheckBoxComplete: {
    backgroundColor: 'green'
  }
});

export default TodoView;
