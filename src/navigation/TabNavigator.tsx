/* eslint-disable react/no-unstable-nested-components */
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EScreens } from './screens';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import IconSvgHomeActive from '../assets/icons/bottomtab/IconSvgHomeActive';
import IconSvgHome from '../assets/icons/bottomtab/IconSvgHome';
import IconSvgMessagesActive from '../assets/icons/bottomtab/IconSvgMessagesActive';
import IconSvgMessages from '../assets/icons/bottomtab/IconSvgMessages';
import IconSvgProfileActive from '../assets/icons/bottomtab/IconSvgProfileActive';
import IconSvgProfile from '../assets/icons/bottomtab/IconSvgProfile';
import IconSvgSettingsActive from '../assets/icons/bottomtab/IconSvgSettingsActive';
import IconSvgSettings from '../assets/icons/bottomtab/IconSvgSettings';
import { HomeNavigator } from './HomeNavigator';
import { ResponseNavigator } from './ResponseNavigator';
import { colors } from '../colors/colors';
import IconSvgArchiveActive from '../assets/icons/bottomtab/IconSvgArchiveActive';
import IconSvgArchive from '../assets/icons/bottomtab/IconSvgArchive';
import { ProjectNavigator } from './ProjectNavigator';
import { enableScreens } from 'react-native-screens';
import { ThemeContext } from '../ThemeContext';

const Tab = createBottomTabNavigator();

enableScreens();

export const TabNavigator = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingTop: 20,
          backgroundColor: darkMode
            ? colors.DARKSHADOW
            : colors.SHADOW,
        },
        tabBarLabelStyle: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          color: darkMode ? colors.WHITETEXT : colors.BLACKTEXT,
          fontFamily: 'Poppins-Regular',
          paddingTop: 3,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => {
            return focused ? <IconSvgHomeActive /> : <IconSvgHome />;
          },
        }}
        name={EScreens.HOMESTACK}
        component={HomeNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Respond',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <IconSvgMessagesActive />
            ) : (
              <IconSvgMessages />
            );
          },
        }}
        name={EScreens.RESPONSESTACK}
        component={ResponseNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Projects',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <IconSvgArchiveActive />
            ) : (
              <IconSvgArchive />
            );
          },
        }}
        name={EScreens.PROJECTSTACK}
        component={ProjectNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <IconSvgProfileActive />
            ) : (
              <IconSvgProfile />
            );
          },
        }}
        name={EScreens.PROFILE}
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <IconSvgSettingsActive />
            ) : (
              <IconSvgSettings />
            );
          },
        }}
        name={EScreens.SETTINGS}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};
