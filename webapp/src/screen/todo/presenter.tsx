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

// view
import TodoEmptyView from '../../component/todoEmpty';

// style
import color from '../../common/assets/style/color';

interface TodoProps {
  todoTitle: string;
  todoList: Todo[];
  onChangeTodoTitle: (todoTitle) => void;
  onPressCreateTodo: () => void;
  onPressTodoCheckBox: (id: number) => void;
  onLongPressItem: (todoId: number) => void;
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
            style={{ width: 30, height: 30 }}
            resizeMode={'cover'}
            source={require('../../common/assets/images/button_add.png')}
          />
        </TouchableOpacity>
      </View>
      {!props.todoList.length ? (
        <TodoEmptyView />
      ) : (
        <View style={styles.todoListView}>
          <View style={styles.todoTitleView}>
            <Text style={styles.todoTitle}>Todo</Text>
          </View>
          {props.todoList.map((item, index) =>
            TodoItemView(props, item, index)
          )}
        </View>
      )}
    </View>
  );
};

const TodoItemView = (props: TodoProps, todoItem: Todo, index: number) => {
  return (
    <TouchableOpacity
      key={index}
      style={styles.todoItemView}
      onLongPress={
        !todoItem.completed
          ? () => {
              props.onLongPressItem(todoItem.id);
            }
          : null
      }
    >
      <TouchableOpacity
        onPress={() => {
          props.onPressTodoCheckBox(todoItem.id);
        }}
      >
        <Image
          style={{
            width: 25,
            height: 25,
            marginRight: 10
          }}
          source={
            todoItem.completed
              ? require('../../common/assets/images/icon_check.png')
              : require('../../common/assets/images/icon_square.png')
          }
        />
      </TouchableOpacity>
      <View>
        <Text
          style={[
            styles.todoItemText,
            todoItem.completed && styles.todoItemTextComplete
          ]}
        >
          {todoItem.title}
        </Text>
      </View>
    </TouchableOpacity>
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
    borderColor: color.gray,
    borderBottomWidth: 0.2,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 18
  },
  todoSubmitButton: {
    display: 'flex',
    flex: 1.5,
    position: 'relative',
    backgroundColor: color.mild_green,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // todoTitle
  todoTitleView: {
    borderBottomColor: color.gray,
    borderBottomWidth: 1.5,
    paddingVertical: 10
  },
  todoTitle: {
    color: color.gray,
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
    borderBottomColor: color.gray,
    borderBottomWidth: 0.5,
    alignItems: 'center'
  },
  todoItemText: {
    fontSize: 18
  },
  todoItemTextComplete: {
    color: '#999999',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  }
});

export default TodoView;
