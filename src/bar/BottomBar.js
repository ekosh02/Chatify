import React from 'react'
import { UserScreen } from '../screens/userScreens/UserScreen'
import { PostScreen } from '../screens/postScreens/PostScreen'
import { ContactScreen } from '../screens/AlbumsScreens/AlbumScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ChatIcon from './../../icon/bottomIcon/chat.svg'
import GroupIcon from './../../icon/bottomIcon/group.svg'
import ContactIcon from './../../icon/bottomIcon/contact.svg'


import { Colors } from '../styles/colors'
import { View, Dimensions } from 'react-native'
import { strings } from '../Localization/Localization'

export const Tab = createBottomTabNavigator()

const { width, height} = Dimensions.get('screen');

export const BottomBar = (props) => {
 
  const postText = "Post"
  const contactText = "Albums"

  

  

  return (
    <View style={{width: width, height: height}}>
      
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.mainPurple, 
      }}>

      <Tab.Screen name={strings.usersBottomBar} component={UserScreen} options={{
        tabBarIcon: ({ focused }) => (
          <ChatIcon stroke={focused ? Colors.mainPurple : Colors.whiteGray} />
        ),

      }} />
      <Tab.Screen name={postText} component={PostScreen} options={{
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

    </Tab.Navigator>
    </View>
  );
};
