import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import color from '../../common/assets/style/color';

const TodoEmptyView = () => {
  return (
    <View style={styles.todoEmptyView}>
      <Image
        style={{
          width: 150,
          height: 150,
          resizeMode: 'cover'
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
    color: color.gray,
    marginTop: 10
  }
});

export default TodoEmptyView;
