import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import color from '../../common/assets/style/color';

const TodoEmptyView = () => {
  return (
    <View style={styles.todoEmptyView}>
      <Text style={styles.todoEmptyText}>{'There is no todo, yet'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoEmptyView: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  todoEmptyText: {
    fontSize: 16,
    color: color.gray
  }
});

export default TodoEmptyView;
