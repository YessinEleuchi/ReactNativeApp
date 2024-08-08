import { View, Text, SafeAreaView,Image, StatusBar } from 'react-native'
import React, { useEffect,useState } from 'react'
import { Black, DarkGreen } from '../../Color'
import Animated , { useSharedValue, withSpring , withDelay } from 'react-native-reanimated'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { TokenVerif } from '../../api/user_api'

const img =require('../../assets/logotext.png')
const Landing = (props) => {
  changeNavigationBarColor(DarkGreen,true)
  const width = useSharedValue('center');
  const size = useSharedValue('-120deg');
  const height = useSharedValue(0);
  const test = ()=>{
    height.value=withDelay(1000,withSpring(100,{duration:2000}))
    size.value=withSpring('0deg',{duration:7000})
    width.value=withDelay(1000,withSpring('flexEnd',{duration:3000}))
  }
 useEffect(() => {

  test()

    const timeoutCheck = setTimeout(() => {
      handleToken()
    }, 3200);

    // Cleanup function
    return () => {
      clearTimeout(timeoutCheck);
    };
  }, []);

  const handleToken = async () => {
    const token = await AsyncStorage.getItem('token');
    TokenVerif({token:token}).then((result) => {
      if (result.data != undefined) {
        props.navigation.replace("Home")
      }else{
        props.navigation.replace("Intro")
      }})
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:DarkGreen,justifyContent:'center'}}>
        <StatusBar barStyle='light-content' backgroundColor={DarkGreen}/>
        <View style={{alignSelf:'center',flex:0.8,justifyContent:'center'}}>
        <Animated.Image  source={img} style={{height:height,objectFit:'contain',alignSelf:'center', 
        transform:[{rotateZ:size},]}} />
        </View>
    </SafeAreaView>
  )
}

export default Landing

