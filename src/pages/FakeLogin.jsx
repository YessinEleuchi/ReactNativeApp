import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@rneui/themed';
import { BackgroundImage, Image, Input } from '@rneui/base';
import BottomButton from '../component/BottomButton';
import { useTranslation } from 'react-i18next';
import { DarkGreen, Gray, White } from '../Color';
import TopHeader from '../component/TopHeader';
import { userLogin } from '../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated , { useSharedValue, withSpring , withDelay } from 'react-native-reanimated'
const img =require('../assets/logotext.png')

const FakeLogin = props => {
  const [email, setEmail] = useState('dhouibahmed50@live.fr');
  const [password, setPassword] = useState('Admin2024');
  const width = useSharedValue('center');
  const size = useSharedValue('-120deg');
  const height = useSharedValue(0);
  const { t } = useTranslation();

  useEffect(() => {
    test()
    setTimeout(() => {
      handleSubmit()
    }, 3000);
  
  }, []);
  const test = ()=>{
    height.value=withDelay(1000,withSpring(100,{duration:2000}))
    size.value=withSpring('0deg',{duration:7000})
    width.value=withDelay(1000,withSpring('flexEnd',{duration:3000}))
  }
  const handleSubmit = () => {
    userLogin({ email: email, password: password }).then((result) => {
      if (result.status === 200) {
        AsyncStorage.setItem('token', result.data.token);
        AsyncStorage.setItem('user', JSON.stringify(result.data));
        console.log('success');
        props.navigation.replace('Home');
      } else {
        console.log('fail');
      }
    })
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: DarkGreen, justifyContent: 'center' }}>
      <StatusBar barStyle='light-content' backgroundColor={DarkGreen} />
      <View style={{ alignSelf: 'center', flex: 0.8, justifyContent: 'center' }}>
        <Animated.Image source={img} style={{
          height: height, objectFit: 'contain', alignSelf: 'center',
          transform: [{ rotateZ: size },]
        }} />
      </View>
    </SafeAreaView>
  );
};

export default FakeLogin;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: DarkGreen,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCont: {
    backgroundColor: DarkGreen,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: Gray,
    borderWidth: 1,
    height: 50,
  },
  text: {
    color: White,
    fontSize: 14,
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
