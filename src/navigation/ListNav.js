import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Lists from '../pages/listes/Lists';
import ListContent from '../pages/learn/ListContent';


const Stack = createStackNavigator();

const ListNav = ({ navigation, route }) => {
  return (
    <Stack.Navigator initialRouteName={'ListsNav'}>

      <Stack.Screen
        name={'ListsNav'}
        component={Lists}
        options={{ headerShown: false, unmountOnBlur: true }}
      />
    <Stack.Screen
        name={'ListContent'}
        component={ListContent}
        options={{ headerShown: false, unmountOnBlur: true }}
      />
      
    </Stack.Navigator>
  );
}

export default ListNav;
