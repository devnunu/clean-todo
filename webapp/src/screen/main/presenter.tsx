import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { View, Text } from 'react-native';

// screen
import Intro from '../intro';
import Auth from '../auth';

interface MainProps {
  isLoggedIn: boolean;
}

const Main = (props: MainProps) => {
  return props.isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />;
};

// 로그인 하지 않았을떄 루트
const PublicRoutes = (props: any) => (
  <Router>
    <Scene key={'root'}>
      <Scene key={'Auth'} component={Auth} title={'Auth'} initial={true} />
    </Scene>
  </Router>
);

// 로그인 되었을때 루트
const PrivateRoutes = (props: any) => (
  <Router>
    <Scene key={'root'}>
      <Scene key={'Intro'} component={Intro} title={'Intro'} initial={true} />
    </Scene>
  </Router>
);

export const LoadingView = (props: any) => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default Main;
