import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// styles
import color from '../../common/assets/style/color';

const LoadingView = () => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color={color.mild_green} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default LoadingView;
