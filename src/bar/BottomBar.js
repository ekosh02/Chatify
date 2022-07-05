import React from 'react';
import {UserScreen} from '../screens/userScreens/UserScreen';
import {PostScreen} from '../screens/postScreens/PostScreen';
import {ContactScreen} from '../screens/AlbumsScreens/AlbumScreen';
import {ProfileScreen} from '../screens/profileScreens/ProfileScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ChatIcon from './../../icon/bottomIcon/chat.svg';
import GroupIcon from './../../icon/bottomIcon/group.svg';
import ContactIcon from './../../icon/bottomIcon/contact.svg';

import {Colors} from '../styles/colors';
import {View, Dimensions} from 'react-native';

import {strings} from './../Localization/Localization';

export const Tab = createBottomTabNavigator();



const {width, height} = Dimensions.get('screen');

export const BottomBar = () => {

  console.log('RENDER USER BottomBar')
  return (
   
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.mainPurple,
        }}>
        <Tab.Screen
          name={strings.user}
          component={UserScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <ChatIcon
                stroke={focused ? Colors.mainPurple : Colors.whiteGray}
              />
            ),
          }}
        />
        <Tab.Screen
          name={strings.post}
          component={PostScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <GroupIcon
                stroke={focused ? Colors.mainPurple : Colors.whiteGray}
              />
            ),
          }}
        />
        <Tab.Screen
          name={strings.albums}
          component={ContactScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <ContactIcon
                stroke={focused ? Colors.mainPurple : Colors.whiteGray}
              />
            ),
          }}
        />
        <Tab.Screen
          name={strings.prodile}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <ContactIcon
                stroke={focused ? Colors.mainPurple : Colors.whiteGray}
              />
            ),
          }}
        />
      </Tab.Navigator>
   
  );
};
