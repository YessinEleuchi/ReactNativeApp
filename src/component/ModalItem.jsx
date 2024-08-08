import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { Beige, Greenish, White } from '../Color'
import { useTranslation } from 'react-i18next'

const ModalItem = (props) => {
    const {t} = useTranslation()
  return (
    <View style={styles.main}>
      <Icon type='ionicon' name={props.icon=='fill'?'umbrella':'umbrella-outline'} size={70} color={props.type=='Verified'?Beige:props.type=='Modified'?Greenish:props.type=='User'?Greenish:null}/>
      <Text style={styles.text}>{props.type=='Verified'?t('verfied_list'):props.type=='Modified'?t('SEverfied_list'):props.type=='User'?t('NOverfied_list'):null}</Text>
      <Text style={styles.subtext}>{props.type=='Verified'?t('verfied_list_content'):props.type=='Modified'?t('SEverfied_list_content'):props.type=='User'?t('NOverfied_list_content'):null}</Text>
    </View>
  )
}

export default ModalItem

const styles = StyleSheet.create({
  main: {
    height:'30%',
    width: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: White
  },
  subtext: {
    fontSize: 14,
    fontWeight: '300',
    color: White,
    textAlign: 'center',
  }
})