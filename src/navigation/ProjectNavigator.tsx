import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EScreens } from './screens';
import { ProjectScreen } from '../screens/ProjectScreen';
import { CreateProjectScreen } from '../screens/CreateProjectScreen';
const ProjectStack = createStackNavigator();

export const ProjectNavigator = () => {
  return (
    <ProjectStack.Navigator screenOptions={{ headerShown: false }}>
      <ProjectStack.Screen
        name={EScreens.PROJECT}
        component={ProjectScreen}
      />
      <ProjectStack.Screen
        name={EScreens.CREATE_PROJECT}
        component={CreateProjectScreen}
      />
    </ProjectStack.Navigator>
  );
};
