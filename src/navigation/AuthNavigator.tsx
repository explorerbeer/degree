import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EScreens} from './screens';
import {StartScreen} from '../screens/StartScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={EScreens.START} component={StartScreen} />
      <AuthStack.Screen name={EScreens.LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={EScreens.REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
