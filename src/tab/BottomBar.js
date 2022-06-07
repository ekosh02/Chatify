import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ChatScreen } from '../components/ChatScreen';
import { GroupScreen } from '../components/GroupScreen';
import { ContactScreen } from '../components/ContactScreen';
import { ProfileScreen } from '../components/ProfileScreen';
import { Tab } from '../../App';

export const BottomBar = (props) => {
  return (
      <Tab.Navigator
       screenOptions={{
        headerShown: false,
      }}>
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Group" component={GroupScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
};
