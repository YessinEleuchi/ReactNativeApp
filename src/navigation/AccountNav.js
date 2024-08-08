import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../pages/account/Account';

const Stack = createStackNavigator();
const AccountNav = ({ navigation, route }) => {
  return (
    <Stack.Navigator screenOptions={{ gestureEnabled: false }} initialRouteName={'AccountNav'}>

      <Stack.Screen
        name={'AccountNav'}
        component={Account}
        gestureEnabled={false}
        options={{ headerShown: false, gestureEnabled: false, unmountOnBlur: true }}
      />

    </Stack.Navigator>
  );
}

export default AccountNav;
