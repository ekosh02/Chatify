import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { SplashScreen } from '../screens/SplashScreen'
import { BottomBar } from './BottomBar'
import { Search } from '../screens/Search'
import { SettingScreen } from '../screens/SettingScreen'


import { UserScreenDetails } from '../screens/userScreens/UserScreenDetails'
import { PostScreenDetails }  from '../screens/postScreens/PostScreenDetails'
import { AlbumScreenDetails } from '../screens/AlbumsScreens/AlbumScreenDetails'

const Stack = createStackNavigator();



const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BottomBar" component={BottomBar} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />

        <Stack.Screen name="UserScreenDetails" component={UserScreenDetails} />
        <Stack.Screen name="PostScreenDetails" component={PostScreenDetails} />
        <Stack.Screen name="AlbumScreenDetails" component={AlbumScreenDetails} />

        
        

     
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;