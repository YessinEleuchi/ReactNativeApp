import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '@rneui/themed';
import {BackgroundImage, Image, Input} from '@rneui/base';
import BottomButton from '../component/BottomButton';
import { useTranslation } from 'react-i18next';
import {DarkGreen, Gray, Green, White} from '../Color';
import TopHeader from '../component/TopHeader';
import { Forgotten} from '../api/user_api';
const bg = require('../assets/bg/background.png');
const sb = require('../assets/logotext.png');


const Login = props => {
  const [email, setEmail] = useState('');

  const {t} = useTranslation();

  const handleSubmit = () => {
    Forgotten({email: email}).then((result) => {
      if (result.status===200) {
        props.navigation.replace('Login');
    }else{
        console.log('fail');
    }
  })};

  return (
    <BackgroundImage style={styles.main} source={bg}>
      <StatusBar barStyle="light-content" backgroundColor={null} />
      <SafeAreaView style={{flex: 1}}>
        <TopHeader headerLeft="arrow-back" iconColor={White} action={() => props.navigation.goBack()}/>
        <View style={styles.container}>
        <Image
          source={sb}
          style={{width: 150, height: 100, objectFit: 'contain',marginVertical:30}}
        />
        <Text style={styles.text}>{t('forgot_para')}</Text>
          <Input
            placeholder={t('email')}
            value={email}
            onChangeText={setEmail}
            style={styles.text}
            inputContainerStyle={styles.inputCont}
          />
        <Button buttonStyle={styles.button}  title={t('send_email')} onPress={handleSubmit}/>
        </View>
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
    fontWeight: '500',
    marginBottom: 20,
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
  button: {
    backgroundColor: Green,
    borderRadius: 5,
    width: 200,
    borderColor: Green,
    borderWidth: 1,
    marginVertical:10
  },
});
