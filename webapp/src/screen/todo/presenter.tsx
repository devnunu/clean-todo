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
        <View style={styles.todoTitleView}>
          <Text style={styles.todoTitle}>Todo</Text>
        </View>
        {props.todoList.map((item, index) => TodoItemView(props, item, index))}
      </View>
    </View>
  );
};

const TodoItemView = (props: TodoProps, todoItem: Todo, index: number) => {
  return (
    <View key={index} style={styles.todoItemView}>
      <TouchableOpacity
        onPress={() => props.onPressTodoCheckBox(todoItem.id)}
        // style={[
        //   styles.todoItemCheckBox,
        //   todoItem.completed && styles.todoItemCheckBoxComplete
        // ]}
      >
        <Image
          style={styles.checkBoxImg}
          resizeMode={'cover'}
          source={
            todoItem.completed
              ? require('../../common/assets/images/icon_check.png')
              : require('../../common/assets/images/icon_square.png')
          }
        />
      </TouchableOpacity>
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
  // todoTitle
  todoTitleView: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  todoTitle: {
    color: 'gray',
    fontSize: 14,
    paddingLeft: 10
  },
  // todoListView
  todoListView: {
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  // todoItem
  todoItemView: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    alignItems: 'center'
  },
  checkBoxImg: {
    width: 25,
    height: 25,
    marginRight: 10
  }
  // todoItemCheckBox: {
  //   backgroundColor: 'black'
  // },
  // todoItemCheckBoxComplete: {
  //   backgroundColor: 'green'
  // }
});

export default TodoView;
