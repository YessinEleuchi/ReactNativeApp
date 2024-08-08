import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inbox from '../pages/inbox/Inbox'
import ListContent from '../pages/learn/ListContent';

const Stack = createStackNavigator();
const InboxNav = ({ navigation, route }) => {
  return (
    <Stack.Navigator initialRouteName={'InboxNav'}>

<Stack.Screen
        name={'InboxNav'}
        component={Inbox}
        options={{ headerShown: false, unmountOnBlur: true }}
      />
      <Stack.Screen
      name='ListContent'
      component={ListContent}
      options={{ headerShown: false, unmountOnBlur: true }}
      />
    </Stack.Navigator>
  );
}

export default InboxNav;
