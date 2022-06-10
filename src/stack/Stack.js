import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { SplashScreen } from '../screens/SplashScreen'
import { BottomBar } from '../tab/BottomBar'
import { Search } from '../screens/Search'
import { ChatScreenDetails } from '../screens/ChatScreenDetails'



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
        <Stack.Screen name="ChatScreenDetails" component={ChatScreenDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;