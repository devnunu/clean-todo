import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

// view
import Tab from '../component/tab';

// screen
import Auth from '../screen/auth';

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
      <Scene
        key={'Main'}
        component={()=><Tab onChangeTab={props.onChangeTab}/>}
        initial={true}
        hideNavBar={true}
        {...props}
      />
    </Scene>
  </Router>
);
