import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import color from '../../common/assets/style/color';

const TodoEmptyView = () => {
  return (
    <View style={styles.todoEmptyView}>
      <Image
        style={{
          aspectRatio: 0.8,
          resizeMode: 'contain'
        }}
        source={require('../../common/assets/images/icon_empty.png')}
      />
      <Text style={styles.todoEmptyText}>{'There is nothing, yet'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoEmptyView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  todoEmptyText: {
    fontSize: 16,
    color: color.gray
  }
});

export default TodoEmptyView;
