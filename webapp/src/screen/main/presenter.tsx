import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

// screen
import Intro from '../intro';

const Main = (props: any) => <PrivateRoutes />;

const PublicRoutes = (props: any) => (
  <Router>
    <Scene key={'root'}>
      <Scene key={'Intro'} component={Intro} title={'Intro'} initial={true} />
    </Scene>
  </Router>
);

const PrivateRoutes = (props: any) => (
  <Router>
    <Scene key={'root'}>
      <Scene key={'Intro'} component={Intro} title={'Intro'} initial={true} />
    </Scene>
  </Router>
);

export default Main;
