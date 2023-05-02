import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EScreens} from './screens';
import {HomeScreen} from '../screens/HomeScreen';
import {ApplicationScreen} from '../screens/ApplicationScreen';
import {ProfileScreen} from '../screens/ProfileScreen';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={EScreens.HOME} component={HomeScreen} />
      <HomeStack.Screen
        name={EScreens.APPLICATIONS}
        component={ApplicationScreen}
      />
      <HomeStack.Screen name={EScreens.PROFILE} component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};
