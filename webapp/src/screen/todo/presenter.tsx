import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// model
import Todo from '../../model/Todo';

// view
import TodoEmptyView from '../../component/todoEmpty';
import TopHeaderView from '../../component/topheader';

// util
import DateUtil from '../../common/util/DateUtil';

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
    <View style={styles.todoView}>
      <View style={styles.topHeader}>
        <TopHeaderView
          title={'TODO'}
          subtitle={DateUtil.getCurrentDateFormat()}
          buttonTitle={'Timeline'}
          onPressTopButton={Actions.Timeline}
        />
      </View>
      {!props.todoList.length ? (
        <TodoEmptyView />
      ) : (
        <ScrollView style={styles.todoListView}>
          <View style={styles.todoTitleView}>
            <View style={styles.titleLeftView}>
              <Text style={styles.todoTitle}>{'YOUR IDEA'}</Text>
            </View>
            <View style={styles.titleRightView}>
              <Text style={styles.todoTotalTitle}>{'Total'}</Text>
              <Text style={styles.todoTotalNumber}>
                {props.todoList.length}
              </Text>
            </View>
          </View>
          {props.todoList.map((item, index) =>
            TodoItemView(props, item, index)
          )}
        </ScrollView>
      )}
      <TodoAddInput {...props} />
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
            marginRight: 20
          }}
          source={
            todoItem.completed
              ? require('../../common/assets/images/icon_check.png')
              : require('../../common/assets/images/icon_square.png')
          }
        />
      </TouchableOpacity>
      <View style={styles.todoItemTextView}>
        <Text
          style={[
            styles.todoItemText,
            todoItem.completed && styles.todoItemTextComplete
          ]}
        >
          {todoItem.title}
        </Text>
        <Text style={[styles.todoItemSubText]}>
          {todoItem.createdAt.split(' ')[0]}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const TodoAddInput = (props: TodoProps) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  todoView: {
    display: 'flex',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topHeader: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

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
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  titleLeftView: {
    flex: 1
  },
  todoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  titleRightView: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline'
  },
  todoTotalTitle: {
    marginRight: 10,
    fontSize: 14,
    letterSpacing: 1,
    color: color.gray
  },
  todoTotalNumber: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  // todoListView
  todoListView: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 16
  },
  // todoItem
  todoItemView: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomColor: color.gray,
    borderBottomWidth: 0.5,
    alignItems: 'center'
  },
  todoItemTextView: {
    display: 'flex',
    flexDirection: 'column'
  },
  todoItemText: {
    fontSize: 20,
    marginBottom: 5,
    letterSpacing: 1
  },
  todoItemSubText: {
    fontSize: 14,
    color: color.gray,
    letterSpacing: 1
  },
  todoItemTextComplete: {
    color: '#999999',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  }
});

export default TodoView;
