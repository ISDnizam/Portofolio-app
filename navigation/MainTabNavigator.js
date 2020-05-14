import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator,createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import PhoneScreen from '../screens/PhoneScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});






const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  { 
    headerMode: 'none' 
  },
  config
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarVisible : false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      size={26}
      name={
        Platform.OS === 'ios'
          ? `home${focused ? '' : '-outline'}`
          : 'home'
      }
    />
  ),
};
HomeStack.path = '';






const PhoneStack = createStackNavigator(
  {
    Phone: PhoneScreen,
  },
  config
);
PhoneStack.navigationOptions = {
  tabBarLabel: 'Phone',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused}  size={26} name="phone-square"/>

  ),
};
PhoneStack.path = '';




const MessageStack = createStackNavigator(
  {
    Message: MessageScreen,
  },
  config
);
MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} size={26} name="inbox"/>
  ),
};
MessageStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MessageStack,
  PhoneStack,
},
{ 
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: true,
   showIcon: true,
   activeTintColor: '#d42f3c',  //Not working for icons.
   inactiveBackgroundColor: '#fff', // Not working at all.
   style: {backgroundColor: '#fff', height: 50, padding:0, margin:0}
 }
});

tabNavigator.path = '';
export default tabNavigator;
