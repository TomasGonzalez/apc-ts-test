import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SelectionScreen from 'screens/selection-screen';
import IssuesDashboard from 'screens/issues-dashboard';
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Select'
      options={{
        title: 'Selection screen',
      }}
      component={SelectionScreen}
    />
    <Stack.Screen
      name='Issues'
      options={{
        title: 'Issues Dashboard',
      }}
      component={IssuesDashboard}
    />
  </Stack.Navigator>
);

export default MainStackNavigator;
