import React  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateLists from '../pages/listes/CreateLists';
import CreateElements from '../pages/listes/CreateElements';

const Stack = createStackNavigator();
// Navigator, Screen, Group

const CreationNav = ({ navigation, route }) => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name={'Create'}
        component={CreateLists}
        options={{ headerShown: false, unmountOnBlur: true }}
      />
    </Stack.Navigator>
  );
}

export default CreationNav;
