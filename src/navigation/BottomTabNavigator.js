import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Platform } from 'react-native';
import { Icon } from '@rneui/themed';

import { useNavigation } from '@react-navigation/native';
import { DarkGreen, Green } from '../Color';
import ListNav from './ListNav';
import InboxNav from './InboxNav';
import CatalogNav from './CatalogNav';
import AccountNav from './AccountNav';
import ProgresNav from './ProgresNav';
import { useTranslation } from 'react-i18next';




const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();
  const {t} = useTranslation()
  const tabBarHeight =Platform.OS == 'android' ? 60 : 80
  const margin =Platform.OS == 'android' ? 10 : 0
  return(
    <Tab.Navigator
      initialRouteName="Catalog"
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        unmountOnBlur:true,
        
        tabBarStyle: {
          backgroundColor:DarkGreen,
          height:tabBarHeight,
          
        },
        tabBarLabelStyle:{
          fontWeight:'500',
          fontSize:12,
          marginBottom:margin
        }
        
      }}
      
    >
    <Tab.Screen 
      name="Lists"
      component={ListNav}
      options={{
        tabBarLabel:t('list'),
        tabBarIcon:({focused})=> 
        <Icon type='ionicon' name={focused ? 'document-text' : 'document-text-outline'} size={20} color={focused?Green:'grey'}/>
      }}
      />
   {/*  <Tab.Screen 
      name="Inbox"
      component={InboxNav}
      options={{
        tabBarLabel:t('inbox'),
        tabBarIcon:({focused})=> 
        <Icon type='ionicon' name={focused ? 'file-tray-full' : 'file-tray-full'} size={20} color={focused?Green:'grey'}/>
      }}
      /> */}
    <Tab.Screen
      name="Catalog" 
      component={CatalogNav}
      options={{
        tabBarLabel:t('catalog'),
        tabBarIcon:({focused})=> 
        <Icon type='ionicon' name={focused ? 'copy' : 'copy-outline'} size={20} color={focused?Green:'grey'}/>
      }}
      />
    <Tab.Screen 
      name="Account" 
      component={AccountNav}
      options={{
        tabBarLabel:t('acc'),
        tabBarIcon:({focused})=> 
        <Icon type='ionicon' name={focused ? 'happy' : 'happy-outline'} size={20} color={focused?Green:'grey'}/>
      }}
      />
    <Tab.Screen 
      name="Progress" 
      component={ProgresNav}
      options={{
        tabBarLabel:t('progress'),
        tabBarIcon:({focused})=> 
        <Icon type='ionicon' name={focused ? 'bar-chart' : 'bar-chart-outline'} size={20} color={focused?Green:'grey'}/>
      }}
      />
  </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({

});
