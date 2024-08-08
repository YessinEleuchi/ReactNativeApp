import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import Intro from '../pages/splash/Intro';
import Login from '../pages/Login';
import FakeLogin from '../pages/FakeLogin';
import ForgotPass from '../pages/ForgotPass';
const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={'IntroAuth'}>
      <Stack.Screen
        name={"IntroAuth"} //second page after splashScreen if user not logged
        component={Intro}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name={"Login"} // btn login from Intro
        component={Login}
        options={{ headerShown: false, gestureEnabled: false }}
      />
            <Stack.Screen
        name={"FakeLogin"} // btn login from Intro
        component={FakeLogin}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
      name={'Forget'}
      component={ForgotPass}
      options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name={"Home"} //btn skip from Intro 
        component={BottomTabNavigator}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
