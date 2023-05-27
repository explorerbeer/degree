import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EScreens } from './screens';
import { HomeScreen } from '../screens/HomeScreen';
import { ApplicationScreen } from '../screens/ApplicationScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { TeamScreen } from '../screens/TeamScreen';
import { SpecScreen } from '../screens/SpecScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { ApplyScreen } from '../screens/ApplyScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { FilterScreen } from '../screens/FilterScreen';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={EScreens.HOME} component={HomeScreen} />
      <HomeStack.Screen
        name={EScreens.APPLICATIONS}
        component={ApplicationScreen}
      />
      <HomeStack.Screen
        name={EScreens.PROFILE}
        component={ProfileScreen}
      />
      <HomeStack.Screen name={EScreens.TEAM} component={TeamScreen} />
      <HomeStack.Screen name={EScreens.SPEC} component={SpecScreen} />
      <HomeStack.Screen
        name={EScreens.CREATE}
        component={CreateScreen}
      />
      <HomeStack.Screen
        name={EScreens.APPLY}
        component={ApplyScreen}
      />
      <HomeStack.Screen
        name={EScreens.SEARCH}
        component={SearchScreen}
      />
      <HomeStack.Screen
        name={EScreens.FILTER}
        component={FilterScreen}
      />
    </HomeStack.Navigator>
  );
};
