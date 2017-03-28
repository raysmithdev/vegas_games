import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';

import Home from './components/Home';
import PlayBlackJack from './components/PlayBlackJack';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={{
        backgroundColor: '#1ba6bd',
        height: Platform.OS === 'ios' ? 64 : 75,
        paddingTop: Platform.OS === 'ios' ? 0 : 20 }}
      titleStyle={{ color: 'white' }}
      barButtonTextStyle={{ color: '#fef267' }}
      barButtonIconStyle={{ tintColor: 'rgb(254, 242, 103)' }}
      rightButtonTextStyle={{ color: '#ffca63' }}
      leftButtonTextStyle={{ color: '#ffca63' }}
      sceneStyle={{ paddingTop: Platform.OS === 'ios' ? 64 : 74 }}
    >
      <Scene initial key="home" component={Home} title="Card Games" />
      <Scene key="playBlackJack" component={PlayBlackJack} title="Blackjack" leftTitle='Home' onLeft={() => Actions.home({ type: 'reset' })} />
    </Router>
  );
};

export default RouterComponent;
