import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { View, Text, StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo';

// style
import color from '../../common/assets/style/color';

// view
import Todo from '../../screen/todo';
import Timeline from '../../screen/timeline';

interface TabProps {
  onChangeTab: (event) => void;
}

const Tab = (props: TabProps) => {
  return (
    <ScrollableTabView
      style={styles.tabView}
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarActiveTextColor={color.mild_green}
      tabBarInactiveTextColor={color.gray}
      tabBarTextStyle={{ fontSize: 16 }}
      onChangeTab={event => props.onChangeTab(event.i)}
      renderTabBar={() => <CustomTabBar />}
    >
      <Todo tabLabel="Todo" />
      <Timeline tabLabel="Timeline" />
    </ScrollableTabView>
  );
};

const CustomTabBar = () => {
  return (
    <LinearGradient colors={['#21D4FD', '#B721FF']}>
      <View>
        <Text>Hello</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  // tabView
  tabView: {
    backgroundColor: 'white',
    ...ifIphoneX(
      {
        paddingTop: 40
      },
      {
        paddingTop: 0
      }
    )
  },
  tabBarUnderlineStyle: {
    backgroundColor: color.mild_green
  }
});

export default Tab;
