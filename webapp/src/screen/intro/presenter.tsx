import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface IntroProps {
  testStatus: boolean;
  toggleTestStatus: () => void;
}

const Intro = (props: IntroProps) => {
  return (
    <View style={styles.introView}>
      <Text>this is intro page</Text>
      <Text>{props.testStatus ? 'true' : 'false'}</Text>
      <View>
        <Button title={'Click'} onPress={props.toggleTestStatus} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  introView: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Intro;
