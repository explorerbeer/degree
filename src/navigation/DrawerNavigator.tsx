import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { ApplicationScreen } from '../screens/ApplicationScreen';
import { TabNavigator } from './TabNavigator';
import { colors } from '../colors/colors';
import { CustomDrawer } from '../components/drawer/CustomDrawer';
import IconHomeDrawer from '../assets/icons/drawertab/IconHomeDrawer';
import IconLikeDrawer from '../assets/icons/drawertab/IconApplicationsDrawer';
import { ThemeContext } from '../ThemeContext';
import IconHomeDrawerDark from '../assets/icons/drawertab/IconHomeDrawerDark';
import IconApplicationsDrawerDark from '../assets/icons/drawertab/IconApplicationsDrawerDark';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 300,
          backgroundColor: darkMode
            ? colors.DARKSHADOW
            : colors.SHADOW,
        },
        drawerActiveBackgroundColor: colors.BUTTON,
        drawerActiveTintColor: colors.WHITETEXT,
        drawerInactiveTintColor: darkMode
          ? colors.OPACITYBUTTON
          : colors.GRAYTEXT,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
          fontFamily: 'Poppins-Regular',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: () => {
            return darkMode ? (
              <IconHomeDrawerDark />
            ) : (
              <IconHomeDrawer />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Liked Offers"
        component={ApplicationScreen}
        options={{
          drawerIcon: () => {
            return darkMode ? (
              <IconApplicationsDrawerDark />
            ) : (
              <IconLikeDrawer />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};
