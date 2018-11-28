import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

// screen
import Auth from '../screen/auth';
import Todo from '../screen/todo';
import Timeline from '../screen/timeline';

interface RouteProps {
  onChangeTab: (event) => void;
}

// 로그인 하지 않았을 때 루트
export const PublicRoutes = (props: RouteProps) => (
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
export const PrivateRoutes = (props: RouteProps) => (
  <Router>
    <Scene key={'root'}>
      <Scene key={'Todo'} component={Todo} initial={true} hideNavBar={true} />
      <Scene key={'Timeline'} component={Timeline} hideNavBar={true} />
    </Scene>
  </Router>
);
