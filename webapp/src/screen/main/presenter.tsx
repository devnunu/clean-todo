import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

// screen
import Intro from '../intro';
import Auth from '../auth';

const Main = (props: any) => <PrivateRoutes />;

const PublicRoutes = (props: any) => (
  <Router>
    <Scene key={'root'}>
      <Scene key={'Auth'} component={Auth} title={'Auth'} initial={true} />
      {/* <Scene key={'Intro'} component={Intro} title={'Intro'} initial={true} /> */}
    </Scene>
  </Router>
);

const PrivateRoutes = (props: any) => (
  <Router>
    <Scene key={'root'}>
      <Scene key={'Auth'} component={Auth} title={'Auth'} initial={true} />
      {/* <Scene key={'Intro'} component={Intro} title={'Intro'} initial={true} /> */}
    </Scene>
  </Router>
);

export default Main;
