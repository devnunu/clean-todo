import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Intro extends Component<{}, {}> {
  render() {
    return (
      <View style={styles.introView}>
        <Text>this is intro page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  introView: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Intro;
