/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EScreens} from './screens';
import {ProfileScreen} from '../screens/ProfileScreen';
import {SettingsScreen} from '../screens/SettingsScreen';
import IconSvgHomeActive from '../assets/icons/bottomtab/IconSvgHomeActive';
import IconSvgHome from '../assets/icons/bottomtab/IconSvgHome';
import IconSvgMessagesActive from '../assets/icons/bottomtab/IconSvgMessagesActive';
import IconSvgMessages from '../assets/icons/bottomtab/IconSvgMessages';
import IconSvgProfileActive from '../assets/icons/bottomtab/IconSvgProfileActive';
import IconSvgProfile from '../assets/icons/bottomtab/IconSvgProfile';
import IconSvgSettingsActive from '../assets/icons/bottomtab/IconSvgSettingsActive';
import IconSvgSettings from '../assets/icons/bottomtab/IconSvgSettings';
import {HomeNavigator} from './HomeNavigator';
import {ResponseNavigator} from './ResponseNavigator';
import {colors} from '../colors/colors';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingTop: 20,
          backgroundColor: colors.SHADOW,
        },
        tabBarLabelStyle: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          color: colors.BLACKTEXT,
          fontFamily: 'Poppins-Regular',
          paddingTop: 3,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, size}) => {
            return focused && size ? <IconSvgHomeActive /> : <IconSvgHome />;
          },
        }}
        name={EScreens.HOMESTACK}
        component={HomeNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Respond',
          tabBarIcon: ({focused}) => {
            return focused ? <IconSvgMessagesActive /> : <IconSvgMessages />;
          },
        }}
        name={EScreens.RESPONSESTACK}
        component={ResponseNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            return focused ? <IconSvgProfileActive /> : <IconSvgProfile />;
          },
        }}
        name={EScreens.PROFILE}
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) => {
            return focused ? <IconSvgSettingsActive /> : <IconSvgSettings />;
          },
        }}
        name={EScreens.SETTINGS}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};
