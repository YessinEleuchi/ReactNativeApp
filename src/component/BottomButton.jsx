import { StyleSheet, Text, View, TouchableOpacity , Image, Platform } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Cream, DarkGray, DarkGreen, Gray, Green, Tomato, White, Yellow } from '../Color'
const random = require('../assets/buttons/ic_brian_head_yellow.png')
const practice = require('../assets/buttons/ic_brian_head.png')

export default function BottomButton(props) {
  const { t } = useTranslation();
  return (
    <View style={[styles.buttonContainer,{backgroundColor:
      props.type=='practice'?Tomato:
      props.type=='random' && props.empty==true?Gray:
      props.type=='random'?Yellow:
      props.type=='begin'?DarkGreen:
      props.type=='login'?DarkGreen:
      props.type=='create'?Green:
      undefined}]}>
        {props.empty == false?
      <Image 
        source={
          props.type=='practice'?practice:
          props.type=='create'?practice:
          props.type=='random'?random:
          undefined} 
        style={[styles.image,
          {bottom:
            props.type=='practice'?60:
            props.type=='create'&&Platform.OS=='ios'?70:
            props.type=='create'?60:
            props.type=='random'?48:
            undefined}]}/>:null}

    <TouchableOpacity activeOpacity={0.9}
      style={[styles.Button,
      {backgroundColor:
        props.type=='practice'?Tomato:
        props.type=='random' && props.empty==true?Gray:
        props.type=='random'?Yellow:
        props.type=='begin'?DarkGreen:
        props.type=='login'?DarkGreen:
        props.type=='create'?Green:
        undefined,
        bottom:Platform.OS=='ios'&&props.bot==true?10:0}]} 
      onPress={props.action}>

    <Text style={[styles.text,{color:props.type=='random' && props.empty==true?DarkGray:White
}]}>
      {props.type=='practice'?t('practice'):
      props.type=='random'?t('random'):
      props.type=='begin'?t('begin'):
      props.type=='login'?t('login'):
      props.type=='create'?t('create'):
      undefined}
    </Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:'100%',
        position:'absolute',
        bottom:0,
        height:70,
        flexDirection:'row',
    },
    Button:{
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
    },
    image:{
      height:90,
      resizeMode:'contain',
      position:'absolute',
      width:'15%',
      right:0,
      zIndex:1
    },
    text:{
      color:Cream,
      fontWeight:'600',
      fontSize:18
    }
})