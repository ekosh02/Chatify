import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {SplashScreen} from '../screens/SplashScreen';
import {BottomBar} from './BottomBar';
import {Search} from '../screens/Search';
import {SettingScreen} from '../screens/SettingScreen';
import {Auth} from '../screens/Account/Auth';
import {Registration} from '../screens/Account/Registration';

import {UserScreenDetails} from '../screens/userScreens/UserScreenDetails';
import {PostScreenDetails} from '../screens/postScreens/PostScreenDetails';
import {AlbumScreenDetails} from '../screens/AlbumsScreens/AlbumScreenDetails';

const Stack = createStackNavigator();

const stacks = [
  {name: 'SplashScreen', component: SplashScreen},
  {name: 'BottomBar', component: BottomBar},
  {name: 'Search', component: Search},
  {name: 'SettingScreen', component: SettingScreen},

  {name: 'UserScreenDetails', component: UserScreenDetails},
  {name: 'PostScreenDetails', component: PostScreenDetails},
  {name: 'AlbumScreenDetails', component: AlbumScreenDetails},
  {name: 'Auth', component: Auth},
  {name: 'Registration', component: Registration},
];

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {stacks.map((stack, key) => (
          <Stack.Screen
            key={key}
            name={stack.name}
            component={stack.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
