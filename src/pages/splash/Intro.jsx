import { View, Text ,StatusBar,StyleSheet} from 'react-native'
import React, { useEffect ,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '@rneui/base'
import {Image } from '@rneui/base'
import { DarkGreen, Gray, Green, White } from '../../Color'
import { useTranslation } from 'react-i18next'


const logo = require('../../assets/logotext.png')

const Intro = (props) => {
  const {t} = useTranslation();

  return (
    <View style={styles.main}>
    <SafeAreaView style={{alignItems:'center'}}>
      <Image source={logo} style={{width: 150, height: 100, objectFit: 'contain'}}/>
      <View style={styles.container}>
      <Text style={styles.text}>Aah! t'es la ? Rebonjour, connectez-vous!</Text>
      <Button buttonStyle={styles.button}  title={t('login')} onPress={()=>props.navigation.navigate('Login')}/>
      <Text style={styles.text}>Curieux? 👀</Text>
      <Button buttonStyle={styles.button2} title={t('guest')} onPress={()=>props.navigation.navigate('FakeLogin')}/>
      </View>
    </SafeAreaView>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DarkGreen,
    },
    text: {
      color: White,
      fontSize: 14,
      fontWeight: '500',
      marginTop: 30,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: Green,
      borderRadius: 5,
      width: 200,
      borderColor: Green,
      borderWidth: 1,
      marginVertical:10
    },
    button2: {
      backgroundColor: null,
      borderRadius: 5,
      width: 200,
      borderColor: Green,
      borderWidth: 1,
      marginVertical:10
    }
})