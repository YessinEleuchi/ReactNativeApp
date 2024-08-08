import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Practice from '../pages/learn/Practice';
import PracticeType from '../pages/learn/PracticeType';
import PracticeScreen from '../pages/learn/PracticeScreen';
import PracticeEnd from '../pages/learn/PracticeEnd';


const Stack = createStackNavigator();
// Navigator, Screen, Group

const LearnNav = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'practice'}
        component={Practice}
        initialParams={{type:route.params}} // a voir
        options={{ headerShown: false, unmountOnBlur: true }}
      />
      <Stack.Screen
      name='PracticeType'
      component={PracticeType}
      options={{ headerShown: false, unmountOnBlur: true }}
      />
      <Stack.Screen
      name='PracticeScreen'
      component={PracticeScreen}
      options={{ headerShown: false, unmountOnBlur: true }}
      />
      <Stack.Screen
      name='PracticeEnd'
      component={PracticeEnd}
      options={{ headerShown: false, unmountOnBlur: true }}
      />
    </Stack.Navigator>
  );
}

export default LearnNav;
