import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Catalog from '../pages/catalogue/Catalog';
import ListContent from '../pages/learn/ListContent';

const Stack = createStackNavigator();
// Navigator, Screen, Group

const CatalogNav = ({ navigation, route }) => {
  return (
    <Stack.Navigator initialRouteName={'CatalogNav'}>
      <Stack.Screen
        name={'CatalogNav'}
        component={Catalog}
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

export default CatalogNav;
