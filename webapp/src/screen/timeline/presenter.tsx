import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

// model
import Todo from '../../model/Todo';

// view
import TodoEmptyView from '../../component/todoEmpty';
import TopHeaderView from '../../component/topheader';

// style
import color from '../../common/assets/style/color';

const TimelineView = (props: any) => {
  const sortedKeys = Object.keys(props.todoTimeline).sort();
  return (
    <View style={styles.timelineView}>
      <View style={styles.topHeader}>
        <TopHeaderView
          title={'TIMELINE'}
          subtitle={'Timeline'}
          buttonTitle={'TODO'}
          onPressTopButton={() => Actions.pop()}
        />
      </View>
      <ScrollView style={styles.timelineListView}>
        <View style={styles.todoTitleView}>
          <View style={styles.titleLeftView}>
            <Text style={styles.todoTitle}>{'TIMELINE'}</Text>
          </View>
          <View style={styles.titleRightView}>
            <Text style={styles.todoTotalTitle}>{'Total'}</Text>
            <Text style={styles.todoTotalNumber}>{!sortedKeys.length ? 0 : sortedKeys.length}</Text>
          </View>
        </View>
        {!sortedKeys.length ? (
          <TodoEmptyView />
        ) : (
          sortedKeys.map((key, index) => {
            return renderTimelineItem(props.todoTimeline[key], key, index);
          })
        )}
      </ScrollView>
    </View>
  );
};

const renderTimelineItem = (todoTimeline: Todo[], key: string, index: number) => {
  return (
    <View key={index}>
      <View style={styles.dateTitleView}>
        <Text style={styles.dateTitle}>{key}</Text>
      </View>
      <View>
        {todoTimeline.map((todo, index) => {
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
            marginRight: 20,
          }}
          source={
            todoItem.completed
              ? require('../../common/assets/images/icon_check.png')
              : require('../../common/assets/images/icon_square.png')
          }
        />
      </View>
      <View>
        <Text style={[styles.todoItemText, todoItem.completed && styles.todoItemTextComplete]}>{todoItem.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timelineView: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topHeader: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timelineTitle: {
    fontSize: 18,
  },
  // todoTitle
  todoTitleView: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  titleLeftView: {
    flex: 1,
  },
  todoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  titleRightView: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },
  todoTotalTitle: {
    marginRight: 10,
    fontSize: 14,
    letterSpacing: 1,
    color: color.gray,
  },
  todoTotalNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // timelineListView
  timelineListView: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  // date title
  dateTitleView: {
    marginTop: 25,
  },
  dateTitle: {
    fontSize: 14,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  // todoItem
  todoItemView: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  todoItemText: {
    fontSize: 20,
  },
  todoItemTextComplete: {
    color: '#999999',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});

export default TimelineView;
