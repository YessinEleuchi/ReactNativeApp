import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator'
import AuthNavigator from './AuthNavigator';
import Landing from '../pages/splash/Landing';
import LearnNav from './LearnNav';
import CreationNav from './CreationNav';
const Stack = createStackNavigator();
// Navigator, Screen, Group

function SplashNav() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={"Landing"}>
      <Stack.Screen
        name={"Intro"}
        component={AuthNavigator}
        options={{ headerShown: false,gestureEnabled:false }}
      />
      <Stack.Screen
        name={"Home"}
        component={BottomTabNavigator}
        options={{ headerShown: false ,gestureEnabled:false}}
      />
      <Stack.Screen
        name={"Landing"}
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"LearnNav"}
        component={LearnNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"CreationNav"}
        component={CreationNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default SplashNav;
