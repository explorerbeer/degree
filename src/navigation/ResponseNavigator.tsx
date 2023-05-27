import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EScreens } from './screens';
import { ResponseScreen } from '../screens/ResponseScreen';
import { ApplyScreen } from '../screens/ApplyScreen';
const MessageStack = createStackNavigator();

export const ResponseNavigator = () => {
  return (
    <MessageStack.Navigator screenOptions={{ headerShown: false }}>
      <MessageStack.Screen
        name={EScreens.PROJECT}
        component={ResponseScreen}
      />
      <MessageStack.Screen
        name={EScreens.CHAT}
        component={ApplyScreen}
      />
    </MessageStack.Navigator>
  );
};
