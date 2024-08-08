import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import { BackgroundImage } from '@rneui/base'
import TopHeader from '../../component/TopHeader'
import { Cream, Green } from '../../Color'
import LearningMode from '../../component/LearningMode'
import { useTranslation } from 'react-i18next'


const Bg_Exp=require('../../assets/modes/illustration.png')
const Bg_Gram=require('../../assets/modes/illustrationgram.png')
const Bg_Vocab=require('../../assets/modes/illustrationvocab.png')

const Practice = ({navigation,route}) => {
const {type,name,words}=route.params.type
const {t}=useTranslation()
return (
    <View style={styles.main}>
    <SafeAreaView style={styles.container}>
      <TopHeader Header={t("back")} headerLeft='arrow-back' color={Green} iconColor={Green} action={() => navigation.goBack()}/>
    <View style={styles.main}>
      <View style={styles.Left}>
      <BackgroundImage source={type=='vocab'?Bg_Vocab:type=='gram'?Bg_Gram:type=='exp'?Bg_Exp:null} style={styles.bg}/>
      </View>
      <View style={styles.Right}>
      <LearningMode type={type} nav={navigation} title={name} words={words}/>
    </View>
    </View>
    </SafeAreaView>
    </View>
  )
}

export default Practice

const styles = StyleSheet.create({
  main:{
    flexDirection:'row',
    height:'100%',
    backgroundColor:Cream
  },
  Left:{
    width:'45%',
    height:'95%',
    alignSelf:'flex-end'
  },
  Right:{
    justifyContent:'space-evenly',
    width:'55%',
    height:'95%',
  },
  bg:{
    height:'100%',
  },
  container:{
    height:'100%',
  }
})