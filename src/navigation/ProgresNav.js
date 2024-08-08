import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Progress from '../pages/progres/Progress';

const Stack = createStackNavigator();
// Navigator, Screen, Group

const ProgresNav = ({ navigation, route }) => {
  return (
    <Stack.Navigator screenOptions={{ gestureEnabled: false }} initialRouteName={'ProgressNav'}>

      <Stack.Screen
        name={'ProgressNav'}
        component={Progress}
        gestureEnabled={false}
        options={{ headerShown: false, gestureEnabled: false, unmountOnBlur: true }}
      />


    </Stack.Navigator>
  );
}

export default ProgresNav;
