import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from '../splashScreen/SplashScreen';
import { BottomBar } from '../tab/BottomBar';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
        headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BottomNavigation" component={BottomBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;