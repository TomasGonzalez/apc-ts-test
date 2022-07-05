import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from './navigators/MainStackNavigator';

const MainNavigator = () => (
  <NavigationContainer>
    <MainStackNavigator />
  </NavigationContainer>
);

export default MainNavigator;
