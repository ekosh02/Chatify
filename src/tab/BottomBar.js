import React from 'react';
import { UsersScreen } from '../screens/UsersScreen';
import { GroupScreen } from '../screens/GroupScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatIcon from './../icon/bottomIcon/chat.svg'
import GroupIcon from './../icon/bottomIcon/group.svg'
import ContactIcon from './../icon/bottomIcon/contact.svg'


import { Colors } from '../color/colors';

export const Tab = createBottomTabNavigator();

export const BottomBar = (props) => {
  const userText = "Users"
  const groupText = "Group"
  const contactText = "Contact"
  const profileuserText = "Prodile"


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.mainPurple, 
      }}>

      <Tab.Screen name={userText} component={UsersScreen} options={{
        tabBarIcon: ({ focused }) => (
          <ChatIcon stroke={focused ? Colors.mainPurple : Colors.whiteGray} />
        ),


      }} />
      <Tab.Screen name={groupText} component={GroupScreen} options={{
        tabBarIcon: ({ focused }) => (
          <GroupIcon stroke={focused ? Colors.mainPurple : Colors.whiteGray} />
        ),
      }}
      />
      <Tab.Screen name={contactText} component={ContactScreen} options={{
        tabBarIcon: ({ focused }) => (
          <ContactIcon stroke={focused ? Colors.mainPurple : Colors.whiteGray} />
        ),
      }} />
      <Tab.Screen name={profileuserText} component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) => (
          <ContactIcon stroke={focused ? Colors.mainPurple : Colors.whiteGray} />
        ),
      }} />
    </Tab.Navigator>
  );
};
