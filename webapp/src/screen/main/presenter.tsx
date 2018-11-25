import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Router, Scene } from 'react-native-router-flux';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { View, Text, StyleSheet } from 'react-native';

// screen
import Auth from '../auth';
import Todo from '../todo';
import Timeline from '../timeline';

// style
import color from '../../common/assets/style/color';

interface MainProps {
  isLoggedIn: boolean;
}

const Main = (props: MainProps) => {
  return props.isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />;
};

// 로그인 하지 않았을 때 루트
const PublicRoutes = (props: any) => (
  <Router>
    <Scene key={'root'}>
      <Scene
        key={'Auth'}
        component={Auth}
        title={'Auth'}
        initial={true}
        hideNavBar={true}
      />
    </Scene>
  </Router>
);

// 로그인 되었을 때 루트
const PrivateRoutes = (props: any) => (
  <Router>
    <Scene key={'root'}>
      <Scene
        key={'Main'}
        component={mainTab}
        initial={true}
        hideNavBar={true}
      />
    </Scene>
  </Router>
);

const mainTab = (props: any) => {
  return (
    <ScrollableTabView
      style={styles.tabView}
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      tabBarActiveTextColor={color.mild_green}
      tabBarInactiveTextColor={color.gray}
      tabBarTextStyle={{ fontSize: 16 }}
    >
      <Todo tabLabel="Todo" />
      <Timeline tabLabel="Timeline" />
    </ScrollableTabView>
  );
};

const styles = StyleSheet.create({
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

export default Main;
