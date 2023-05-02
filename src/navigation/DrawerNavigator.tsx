/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {ApplicationScreen} from '../screens/ApplicationScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {SettingsScreen} from '../screens/SettingsScreen';
import {TabNavigator} from './TabNavigator';
import {colors} from '../colors/colors';
import {CustomDrawer} from '../components/drawer/CustomDrawer';
import IconHomeDrawer from '../assets/icons/drawertab/IconHomeDrawer';
import IconUserDrawer from '../assets/icons/drawertab/IconUserDrawer';
import IconLikeDrawer from '../assets/icons/drawertab/IconApplicationsDrawer';
import IconSettingsDrawer from '../assets/icons/drawertab/IconSettingsDrawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 300,
          backgroundColor: colors.SHADOW,
        },
        drawerActiveBackgroundColor: colors.BUTTON,
        drawerActiveTintColor: colors.WHITETEXT,
        drawerInactiveTintColor: colors.GRAYTEXT,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: () => <IconHomeDrawer />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: () => <IconUserDrawer />,
        }}
      />
      <Drawer.Screen
        name="Liked Offers"
        component={ApplicationScreen}
        options={{
          drawerIcon: () => <IconLikeDrawer />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: () => <IconSettingsDrawer />,
        }}
      />
    </Drawer.Navigator>
  );
};
