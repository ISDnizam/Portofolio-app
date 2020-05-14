import React from 'react';
import { Alert } from 'react-native';
import { createAppContainer, createSwitchNavigator,createStackNavigator } from 'react-navigation';
import styles from "../components/Style";
import { Header, Icon } from 'react-native-elements';

import MainTabNavigator from './MainTabNavigator';
import AppNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import ProjectScreen from '../screens/ProjectScreen';
import DetailProjectScreen from '../screens/DetailProjectScreen';
import AboutScreen from '../screens/AboutScreen';

const AppStack = createStackNavigator({
  App: {
    screen: MainTabNavigator,
    navigationOptions: ({ navigation }) => ({
    header :null,
    }),
  },
  Project: ProjectScreen, 
  DetailProject: DetailProjectScreen, 
  About: AboutScreen, 
  });

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: MainTabNavigator,
      App: AppStack,
    },
    {
      initialRouteName: 'Main',
    }
  )
);