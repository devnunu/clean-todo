import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// model
import Todo from '../../model/Todo';

// view
import TodoEmptyView from '../../component/todoEmpty';

// style
import color from '../../common/assets/style/color';

const TimelineView = (props: any) => {
  const sortedKeys = Object.keys(props.todoList).sort();
  return (
    <View style={styles.timelineView}>
      <View style={styles.timelineTitleView}>
        <Text style={styles.timelineTitle}>Timeline</Text>
      </View>
      <View>
        {!sortedKeys.length ? (
          <TodoEmptyView />
        ) : (
          sortedKeys.map((key, index) => {
            return renderTimelineItem(props.todoList[key], key, index);
          })
        )}
      </View>
    </View>
  );
};

const renderTimelineItem = (todoList: Todo[], key: string, index: number) => {
  return (
    <View key={index}>
      <View style={styles.dateTitleView}>
        <Text style={styles.dateTitle}>{key}</Text>
      </View>
      <View>
        {todoList.map((todo, index) => {
          return renderTodoItem(todo, index);
        })}
      </View>
    </View>
  );
};

const renderTodoItem = (todoItem: Todo, index: number) => {
  return (
    <View key={index} style={styles.todoItemView}>
      <View>
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
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  timelineView: {
    display: 'flex'
  },
  timelineTitleView: {
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  timelineTitle: {
    fontSize: 18
  },
  // date title
  dateTitleView: {
    paddingVertical: 8,
    backgroundColor: color.mild_green
  },
  dateTitle: {
    color: 'white',
    fontSize: 14,
    paddingLeft: 10,
    fontWeight: 'bold'
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

export default TimelineView;
