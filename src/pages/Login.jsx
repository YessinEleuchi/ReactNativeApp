import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '@rneui/themed';
import {BackgroundImage, Image, Input} from '@rneui/base';
import BottomButton from '../component/BottomButton';
import { useTranslation } from 'react-i18next';
import {DarkGreen, Gray, White} from '../Color';
import TopHeader from '../component/TopHeader';
import { userLogin } from '../api/user_api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const bg = require('../assets/bg/background.png');
const sb = require('../assets/logotext.png');


const Login = props => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {t} = useTranslation();

  const handleSubmit = () => {
    userLogin({email: email, password: password}).then((result) => {
      if (result.status===200) {
        AsyncStorage.setItem('token', result.data.token);
        AsyncStorage.setItem('user', JSON.stringify(result.data));
        console.log('success');
        props.navigation.replace('Home');
    }else{
        console.log('fail');
    }
  })};

  return (
    <BackgroundImage style={styles.main} source={bg}>
      <StatusBar barStyle="light-content" backgroundColor={null} />
      <SafeAreaView style={{flex: 1}}>
        <TopHeader headerLeft="arrow-back" iconColor={White} action={() => props.navigation.goBack()}/>
        <View style={styles.mainContainer}>
        <Image
          source={sb}
          style={{width: 150, height: 100, objectFit: 'contain'}}
        />
        <View style={styles.container}>
          <Input
            placeholder={t('email')}
            value={email}
            onChangeText={setEmail}
            style={styles.text}
            inputContainerStyle={styles.inputCont}
          />
          <Input
            placeholder={t('pwd')}
            value={password}
            onChangeText={setPassword}
            style={styles.text}
            secureTextEntry={showPassword}
            rightIcon={{
              name: showPassword ? 'eye-outline' : 'eye-off-outline',
              size: 20,
              type: 'ionicon',
              color: White,
              onPress: () => setShowPassword(!showPassword),
            }}
            inputContainerStyle={styles.inputCont}
          />
          <Text style={styles.text} onPress={() => props.navigation.navigate('Forget')}>{t('forget_pwd')}</Text>
        </View>
        </View>
        <BottomButton type="login" action={handleSubmit} bot={true}/>
      </SafeAreaView>
    </BackgroundImage>
  );
};

export default Login;

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
