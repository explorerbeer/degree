import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import {DrawerNavigator} from './DrawerNavigator';
import {EScreens} from './screens';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={EScreens.AUTHSTACK} component={AuthNavigator} />
        <Stack.Screen name={EScreens.DRAWER} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
